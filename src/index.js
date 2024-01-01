import { Task, displayTask, showTaskForm, hideTaskForm } from './taskHandler.js';
import { taskList } from './taskHandler.js';
import { createProject, getProjectTasks, displayProjects, deleteProject } from './projectHandler.js';
import './styles.css';

document.addEventListener("DOMContentLoaded", () => {
    let taskCount = 1;
    let currentProject;
    const localTaskList = [];

    const myProjects = [];
    if (localStorage.getItem('projectTitles')) {
        myProjects.push(...JSON.parse(localStorage.getItem('projectTitles')));
        // clears for eventual null projects
        myProjects.forEach(project => {
            if (!project) {
                myProjects.splice(myProjects.indexOf(project), 1);
            }
        })

        console.log('Starting myProjects array:');
        console.log(myProjects);
        for (const title of myProjects) {
            createProject(title);
        }
    }
    refreshProjectEventListeners();

    if (localStorage.tasks) {
        taskList.push(JSON.parse(localStorage.getItem('tasks')))
        taskList.forEach(task => {
            console.log('This is the task:');
            console.log(task);
            task.forEach(obj => {
                console.log('this is the project:');
                console.log(obj);
                const madeTask = displayTask(obj, taskCount, obj.project)
                localTaskList.push(madeTask)
                console.log(madeTask);
                console.log(localTaskList);
            })
        })
    }

    const createProjectBtn = document.querySelector('#create-project-button');
    createProjectBtn.addEventListener('click', () => {

        let projectTitle = prompt('Type in your project name');
        if (projectTitle) {
            createProject(projectTitle);
            localStorage.setItem('projectTitles', JSON.stringify(myProjects));
        } else {
            alert('You must input a name to your project to create it.')
        }

        myProjects.push(projectTitle);
        localStorage.setItem('projectTitles', JSON.stringify(myProjects));
        refreshProjectEventListeners();
    })

    function refreshProjectEventListeners() {
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            project.addEventListener('click', () => {
                currentProject = project;
                getProjectTasks(currentProject.id);
            })
        })
    }

    function returnToProjects() {
        hideTaskForm();
        displayProjects();
    }

    const addTaskBtn = document.querySelector('#add-task-button')
    const createTaskBtn = document.querySelector('#task-creation-button');

    const taskTitle = document.querySelector('#task-title');
    const taskDueDate = document.querySelector('#task-due-date');

    const returnToProjectsBtn = document.querySelector('#projects-button');
    const deleteProjectBtn = document.querySelector('#delete-project-button');


    addTaskBtn.addEventListener('click', () => {
        showTaskForm();
    })

    createTaskBtn.addEventListener('click', () => {
        const builtTask = Task(taskTitle.value, taskDueDate.value, taskCount, currentProject.id);
        taskList.push(builtTask);
        localStorage.setItem('tasks', JSON.stringify(taskList));
        console.log('Built task:');
        console.log(builtTask);
        console.log('Task list:');
        console.log(taskList);
        taskCount++;
        taskTitle.value === '';
        taskDueDate.value === '';
    })

    returnToProjectsBtn.addEventListener('click', () => {
        returnToProjects();
    })

    deleteProjectBtn.addEventListener('click', () => {
        deleteProject(currentProject, myProjects);
        refreshProjectEventListeners();
        returnToProjects();
    })
})