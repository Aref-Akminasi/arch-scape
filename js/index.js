const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const projectCount = document.getElementById('project-count');
const projectImg = document.getElementById('project-img');
const projectName = document.getElementById('project-name');
const viewProject = document.getElementById('view-project');
let projects;
let currentProject = 1;

async function getProjects() {
  const res = await fetch('./projects.json');
  const data = await res.json();
  projects = await data;
  updateUI(await projects);
}

function updateUI() {
  projectCount.innerText = `${currentProject}/${projects.length}`;
  projectImg.src = projects[currentProject - 1].images[0];
  projectName.innerText = projects[currentProject - 1].name;
  viewProject.href = `./pages/${projects[currentProject - 1].name}.html`;
}

decreaseBtn.addEventListener('click', () => {
  if (currentProject == 1) {
    currentProject = projects.length;
  } else {
    currentProject--;
  }
  updateUI();
});

increaseBtn.addEventListener('click', () => {
  if (currentProject == projects.length) {
    currentProject = 1;
  } else {
    currentProject++;
  }
  updateUI();
});

getProjects();
