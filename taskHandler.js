export function Task(taskCount) {
    const newTask = {};
    newTask.title = 'Feed dog';
    newTask.dueDate = '01/02';
    newTask.priority = 'medium';

    displayTask(newTask, taskCount);
    return newTask;
}

const tasksContainer = document.querySelector('#tasks-container');

function displayTask(task, count) {

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
    colDiv2.textContent = task.dueDate;
    rowDiv.appendChild(colDiv2);

    const svg = document.createElement('svg');
    svg.classList.add('delete-button');
    svg.setAttribute('xmlns', "http://www.w3.org/2000/svg");
    svg.setAttributeNS(null, 'viewBox', '0 0 24 24');

    svg.innerHTML = `<title>Delete Task</title>
    <path
        d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />`;

    svg.addEventListener('click', () => {
        div.remove();
        console.log(`Successfully removed ${div.id}.`);
    })
    colDiv2.appendChild(svg);

    tasksContainer.appendChild(div);
}


