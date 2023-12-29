// the entire gray container
const projectsDisplay = document.querySelector('#projects-display');
// just the black borders
const projectsContainer = document.querySelector('#projects-container');
const tasksContainer = document.querySelector('#tasks-container');

export function createProject(title) {
    const div = document.createElement('div');
    div.classList.add('project', 'col-sm', 'bg-info', 'rounded', 'my-1', 'p-2');
    div.id = title;
    console.log(div.id);
    div.textContent = title;
    projectsContainer.appendChild(div);
}

export function displayProjectTasks() {
    if (tasksContainer.classList.contains('d-none')) {
        tasksContainer.classList.remove('d-none');
        projectsDisplay.classList.add('d-none');
    } else {
        console.log('Tasks container is visible');
    }
}
export function displayProjects() {
    if (projectsDisplay.classList.contains('d-none')) {
        projectsDisplay.classList.remove('d-none');
        tasksContainer.classList.add('d-none');
    }
}

export function getProject(eventTarget) {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
            console.log(task.id);
    })
}