import { Task } from './taskHandler.js';
import { createProject, getProject } from './projectHandler.js';

document.addEventListener("DOMContentLoaded", () => {

    const createProjectBtn = document.querySelector('#create-project-button');
    createProjectBtn.addEventListener('click', () => {

        let projectTitle = prompt('Type in your project name');
        createProject(projectTitle);
    })

    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', (e) => {
            getProject(e.target);
        })
    })



    const addTaskBtn = document.querySelector('#add-task-button')
    
    let taskCount = 1;

    addTaskBtn.addEventListener('click', () => {
        Task(taskCount);
        taskCount++;
    })
})