const tasksContainer = document.querySelector('#tasks-container');

// const taskPriority = document.querySelector('#task-priority');
export const taskList = [];

export function Task(title, dueDate, taskCount, parentProject) {
    console.log(title);
    const newTask = {};
    newTask.title = title;
    newTask.dueDate = dueDate; 
    newTask.priority = (function() {
        const priorityElement = document.querySelector('#priority');
        return priorityElement.value;
    })();
    newTask.project = parentProject;

    displayTask(newTask, taskCount, parentProject);
    return newTask;
}

export function displayTask(task, count, parentProject) {

    const div = document.createElement('div');
    div.classList.add('task', 'mt-1', 'bg-secondary', 'rounded', 'p-2', 'ps-3');
    div.id = `task${count}`;
    
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
    img.addEventListener('click', () => {
        deleteTask(div);
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

export function deleteTask(selectedTask) {
    selectedTask.remove();
    console.log(`Successfully removed ${selectedTask.id}.`);
}