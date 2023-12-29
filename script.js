import { Task } from './taskHandler.js';
import { createProject, displayProjectTasks, displayProjects, getProject } from './projectHandler.js';

document.addEventListener("DOMContentLoaded", () => {

    const createProjectBtn = document.querySelector('#create-project-button');
    createProjectBtn.addEventListener('click', () => {

        let projectTitle = prompt('Type in your project name');
        console.log(projectTitle);
        if (projectTitle) {
            createProject(projectTitle);
        } else {
            alert('You must input a name to your project to create it.')
        }
        refreshEventListeners();
    })

    function refreshEventListeners() {
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            project.addEventListener('click', () => {
                displayProjectTasks();
            })
        })
    }
        

    const addTaskBtn = document.querySelector('#add-task-button')
    const TaskCreationContainer = document.querySelector('#task-creation-container');
    const createTaskBtn = document.querySelector('#task-creation-button');
    
    const taskTitle = document.querySelector('#task-title');
    const taskDueDate = document.querySelector('#task-due-date');
    
    const returnToProjectsBtn = document.querySelector('#projects-button');
    
    let taskCount = 1;

    addTaskBtn.addEventListener('click', () => {
        if (TaskCreationContainer.classList.contains('d-none')) {
            TaskCreationContainer.classList.remove('d-none');
        } else {
            console.log('Task creation container already visible.');
        }
    })

    createTaskBtn.addEventListener('click', () => {
        Task(taskTitle.value, taskDueDate.value, taskCount);
        taskCount++;
        taskTitle.value === '';
        taskDueDate.value === '';
    })

    returnToProjectsBtn.addEventListener('click', () => {
        displayProjects();
    })
})