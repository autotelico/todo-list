import { Task, showTaskForm, hideTaskForm } from './taskHandler.js';
import { createProject, getProjectTasks, displayProjects } from './projectHandler.js';
import './styles.css';

document.addEventListener("DOMContentLoaded", () => {

    const myProjects = JSON.parse(localStorage.getItem('projectTitles'))
    console.log(myProjects);
    // console.log(myProjects.splice(myProjects.indexOf('Two'), 1));
    // console.log(myProjects);

    for (const title of myProjects) {
        createProject(title);
    }
    refreshProjectEventListeners();

    const createProjectBtn = document.querySelector('#create-project-button');
    createProjectBtn.addEventListener('click', () => {

        let projectTitle = prompt('Type in your project name');
        if (projectTitle){
            createProject(projectTitle);
        } else {
            alert('You must input a name to your project to create it.')
        }

        myProjects.push(projectTitle);
        localStorage.setItem('projectTitles', JSON.stringify(myProjects));
        refreshProjectEventListeners();
    })

    let currentProject; // maybe add this as the return of refreshProjectEventListeners?

    function refreshProjectEventListeners() {
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            project.addEventListener('click', () => {
                currentProject = project.id;
                getProjectTasks(currentProject);
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
        
    })    
})