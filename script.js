import { Task } from './taskHandler.js';

document.addEventListener("DOMContentLoaded", () => {

    const addTaskBtn = document.querySelector('#add-task-button')
    
    let taskCount = 1;

    addTaskBtn.addEventListener('click', () => {
        Task(taskCount);
        taskCount++;
    })


})