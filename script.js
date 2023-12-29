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
    const returnToProjectsBtn = document.querySelector('#projects-button');
    
    let taskCount = 1;

    addTaskBtn.addEventListener('click', () => {
        Task(taskCount);
        taskCount++;
    })

    returnToProjectsBtn.addEventListener('click', () => {
        displayProjects();
    })
})