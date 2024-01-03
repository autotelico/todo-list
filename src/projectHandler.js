// the entire gray container
const projectsDisplay = document.querySelector("#projects-display");
// just the black borders
const projectsContainer = document.querySelector("#projects-container");
const tasksContainer = document.querySelector("#tasks-container");

// node lists for looping

export function createProject(title) {
  const div = document.createElement("div");
  div.classList.add("project", "col-sm", "bg-info", "rounded", "my-1", "p-2");
  div.id = title;
  console.log(div.id);
  div.textContent = title;

  projectsContainer.appendChild(div);
}

export function getProjectTasks(projectId) {
  if (tasksContainer.classList.contains("d-none")) {
    tasksContainer.classList.remove("d-none");
    projectsDisplay.classList.add("d-none");
  } else {
    console.log("Tasks container is visible");
  }

  // in the tasks container
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    if (task.dataset.childofproject === projectId) {
      task.classList.remove("d-none");
      console.log("Showing project's tasks");
    } else {
      task.classList.add("d-none");
      console.log("hide");
    }
  });
}
export function displayProjects() {
  if (projectsDisplay.classList.contains("d-none")) {
    projectsDisplay.classList.remove("d-none");
    tasksContainer.classList.add("d-none");
  }

  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.classList.add("d-none");
    console.log("Hiding all tasks");
  });
}
export function deleteProject(project, allProjects) {
  project.remove();
  allProjects.forEach((singleProject) => {
    if (singleProject === project.id) {
      allProjects.splice(allProjects.indexOf(singleProject), 1);
      console.log("New array is:");
      console.log(allProjects);
      localStorage.clear();
      localStorage.setItem("projectTitles", JSON.stringify(allProjects));
    }
  });
}
