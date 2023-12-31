const tasksContainer = document.querySelector('#tasks-container');

// const taskPriority = document.querySelector('#task-priority');
const taskList = [];

export function Task(title, dueDate, taskCount, parentProject) {
    const newTask = {};
    newTask.title = title;
    newTask.dueDate = dueDate; 
    newTask.priority = (function() {
        const priorityElement = document.querySelector('#priority');
        console.log(`Priority of task '${newTask.title}' is ${priorityElement.value}.`);
        return priorityElement.value;
    })();
    newTask.project = parentProject;

    displayTask(newTask, taskCount, parentProject);
    taskList.push(newTask);
    return newTask;
}


function displayTask(task, count, parentProject) {

    const div = document.createElement('div');
    div.classList.add('task', 'mt-1', 'bg-secondary', 'rounded', 'p-2', 'ps-3');
    div.id = `task${count}`;
    console.log(div.id);
    
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

    img.innerHTML = `<title>Delete Task</title>
    <path
        d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />`;

    img.addEventListener('click', () => {
        div.remove();
        console.log(`Successfully removed ${div.id}.`);
    })
    colDiv2.appendChild(img);

    div.setAttribute('data-childofproject', parentProject)
    console.log('Parent project of the task is ' + parentProject);

    tasksContainer.appendChild(div);
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