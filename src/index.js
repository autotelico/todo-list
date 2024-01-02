import { Task, displayTask, showTaskForm, hideTaskForm } from './taskHandler.js';
import { taskList } from './taskHandler.js';
import { createProject, getProjectTasks, displayProjects, deleteProject } from './projectHandler.js';
import './styles.css';

document.addEventListener("DOMContentLoaded", () => {
    let taskCount = 1;
    let currentProject;
    let myTasks;
    const localTaskList = [];
    console.log(taskList);

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
        myTasks = JSON.parse(localStorage.getItem('tasks'))
        console.log('New task list:');
        console.log(taskList);
        myTasks.forEach(task => {
            console.log(task);
            const madeTask = displayTask(task, taskCount, task.project, task.priority)
            localTaskList.push(madeTask)
        })
    } else {
        myTasks = [];
    }

    console.log('Starting taskList:');
    console.log(taskList);

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
            project.addEventListener('click', (e) => {
                let clickedProject = e.target.id;
                if (myTasks) {
                    myTasks.forEach(obj => {
                        if (obj.project === clickedProject) {
                            console.log('Yes, same');
                            const result = getProjectTasks(clickedProject)
                            console.log(result);
                        }
                        if (obj.project === clickedProject) {
                            console.log('Yes, same');
                            const result = getProjectTasks(clickedProject)
                            console.log(result);
                        }
                    })
                }
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
        myTasks.push(builtTask);
        localStorage.setItem('tasks', JSON.stringify(myTasks));
        console.log('Built task:');
        console.log(builtTask);
        console.log('Task list:');
        console.log(myTasks);
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