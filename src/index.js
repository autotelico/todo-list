import { Task, showTaskForm, hideTaskForm } from './taskHandler.js';
import { createProject, getProjectTasks, displayProjects, deleteProject } from './projectHandler.js';
import './styles.css';

document.addEventListener("DOMContentLoaded", () => {

    const myProjects = [];
    if (localStorage.getItem('projectTitles')) {
        myProjects.push(...JSON.parse(localStorage.getItem('projectTitles')));
        for (const title of myProjects) {
            createProject(title);
        }
    }
    refreshEventListeners();

    const createProjectBtn = document.querySelector('#create-project-button');
    createProjectBtn.addEventListener('click', () => {

        let projectTitle = prompt('Type in your project name');
        if (projectTitle) {
            createProject(projectTitle);
            myProjects.push(projectTitle);
            localStorage.setItem('projectTitles', JSON.stringify(myProjects));
            console.log(myProjects);
        } else {
            alert('You must input a name to your project to create it.')
        }
        refreshEventListeners();
    })

    let currentProjectID; // maybe add this as the return of refreshEventListeners?
    let currentProject;

    function refreshEventListeners() {
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            project.addEventListener('click', () => {
                currentProjectID = project.id;
                currentProject = project;
                // console.log();
                getProjectTasks(currentProjectID);
            })
        })
    }
        

    const addTaskBtn = document.querySelector('#add-task-button')
    const createTaskBtn = document.querySelector('#task-creation-button');
    
    const taskTitle = document.querySelector('#task-title');
    const taskDueDate = document.querySelector('#task-due-date');
    
    const returnToProjectsBtn = document.querySelector('#projects-button');
    const deleteProjectBtn = document.querySelector('#delete-project-button');
    
    let taskCount = 1;

    addTaskBtn.addEventListener('click', () => {
        showTaskForm();
    })

    createTaskBtn.addEventListener('click', (e) => {
        Task(taskTitle.value, taskDueDate.value, taskCount, currentProject);
        taskCount++;
        taskTitle.value === '';
        taskDueDate.value === '';
    })

    returnToProjectsBtn.addEventListener('click', () => {
        hideTaskForm();
        displayProjects();
    })

    deleteProjectBtn.addEventListener('click', () => {
        deleteProject(currentProject, myProjects);
        refreshEventListeners();
    })
})