const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const projectCount = document.getElementById('project-count');
const projectImg = document.getElementById('project-img');
const projectName = document.getElementById('project-name');
const viewProject = document.getElementById('view-project');
const ourProjects = document.querySelectorAll('.project');
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const close = document.getElementById('close');

let projects;
let currentProject = 1;

async function getProjects() {
  const res = await fetch('/projects.json');
  const data = await res.json();
  projects = await data;
  updateHeader();
  updateProjects();
}

function updateHeader() {
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
  updateHeader();
});

increaseBtn.addEventListener('click', () => {
  if (currentProject == projects.length) {
    currentProject = 1;
  } else {
    currentProject++;
  }
  updateHeader();
});

function updateProjects() {
  ourProjects.forEach((project, idx) => {
    const img = project.querySelector(':scope > img');
    img.src = projects[idx].images[1];
    const title = project.querySelector('p');
    title.innerText = projects[idx].name;
    const link = project.querySelector('a');
    link.href = `./pages/${projects[idx].name}.html`;
  });
}

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('flex');
});

close.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
});
getProjects();
