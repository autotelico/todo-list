const tasksContainer = document.querySelector('#tasks-container');

// const taskPriority = document.querySelector('#task-priority');
export const taskList = [];
const allTasks = JSON.parse(localStorage.getItem('tasks'));

export function Task(title, dueDate, taskCount, parentProject) {
    console.log(title);
    const newTask = {};
    newTask.title = title;
    newTask.dueDate = dueDate;
    newTask.priority = (function () {
        const priorityElement = document.querySelector('#priority');
        return priorityElement.value;
    })();
    newTask.project = parentProject;

    displayTask(newTask, taskCount, parentProject, newTask.priority);
    return newTask;
}

export function displayTask(task, count, parentProject, priority) {

    const div = document.createElement('div');
    div.classList.add('task', 'mt-1', 'rounded', 'p-2', 'ps-3');
    div.id = `task${count}`;
    switch (priority) {
        case 'low':
            div.style.backgroundColor = '#0af';
            break;
        case 'medium':
            div.style.backgroundColor = 'yellow';
            break;
        case 'high':
            div.style.backgroundColor = 'red';
            break;
    }

    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    div.appendChild(rowDiv);

    const colDiv1 = document.createElement('div');
    colDiv1.classList.add('col-sm');

    const input = document.createElement("input");
    input.type = 'checkbox';
    colDiv1.appendChild(input);
    const para1 = document.createElement('p');
    para1.textContent = task.title;
    para1.classList.add('d-inline', 'ps-2');
    colDiv1.appendChild(para1);

    rowDiv.appendChild(colDiv1);
    const colDiv2 = document.createElement('div');
    colDiv2.classList.add('col-sm');
    colDiv2.textContent = `Due date: ${task.dueDate}`;
    rowDiv.appendChild(colDiv2);

    const img = document.createElement('img');
    img.classList.add('delete-button');
    img.src = '../src/icons/delete-icon.svg';
    img.title = 'Delete Task';
    img.addEventListener('click', (e) => {
        deleteTask(div, e);
    })
    colDiv2.appendChild(img);

    div.setAttribute('data-childofproject', parentProject)

    tasksContainer.appendChild(div);
    return div;
}

export function showTaskForm() {
    const TaskCreationContainer = document.querySelector('#task-creation-container');
    if (TaskCreationContainer.classList.contains('d-none')) {
        TaskCreationContainer.classList.remove('d-none');
        console.log('Showed form');
    } else {
        console.log('Task creation container already visible.');
    }
}

export function hideTaskForm() {
    const TaskCreationContainer = document.querySelector('#task-creation-container');
    if (!TaskCreationContainer.classList.contains('d-none')) {
        TaskCreationContainer.classList.add('d-none');
        console.log('Hid form');
    }
}

export function deleteTask(selectedTask, event) {
    selectedTask.remove();
    console.log(selectedTask);
    console.log(selectedTask.dataset.childofproject);
    allTasks.forEach(task => {
        console.log('Task title:');
        console.log(task.title);
        console.log(event.target.parentNode.parentNode.firstChild.textContent);
        if (selectedTask.dataset.childofproject === task.project && task.title === event.target.parentNode.parentNode.firstChild.textContent) {
            allTasks.splice(allTasks.indexOf(task), 1);
            localStorage.setItem('tasks', JSON.stringify(allTasks))
            console.log('Your tasks now are:');
            console.log(allTasks);
        }
    })
    console.log(`Successfully removed ${selectedTask.id}.`);
}