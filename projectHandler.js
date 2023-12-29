    const projectsContainer = document.querySelector('#projects-container');

export function createProject(title) {
    const div = document.createElement('div');
    div.classList.add('bg-info', 'rounded', 'my-1', 'p-2');
    div.id = title;
    console.log(div.id);
    div.textContent = title;
    projectsContainer.appendChild(div);
}

export function getProject(eventTarget) {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        if (eventTarget.id === task.id) {

        }
    })
}