const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const close = document.getElementById('close');
const pageCount = document.getElementById('page-count');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const projectsContainer = document.getElementById('projects-container');
let currentPage = 1;
let totalPages = 0;
let projects = [];

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('flex');
});

close.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
});

async function getProjects() {
  const res = await fetch('/projects.json');
  const data = await res.json();
  projects = await data;
  totalPages = Math.ceil(projects.length / 3);
  pageCount.innerText = `${currentPage}/${totalPages}`;
  updatePage();
}

increase.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    pageCount.innerText = `${currentPage}/${totalPages}`;
    updatePage();
  }
});

decrease.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    pageCount.innerText = `${currentPage}/${totalPages}`;
    updatePage();
  }
});

function updatePage() {
  projectsContainer.innerHTML = '';
  const idxShift = (currentPage - 1) * 3;
  console.log(idxShift);
  for (let i = 0; i < 3; i++) {
    if (projects[i + idxShift]) {
      const project = document.createElement('div');
      project.className =
        'flex flex-col bg-containerBgGray max-h-none lg:flex-row lg:max-h-120';
      project.innerHTML = `<!-- Img container -->
        <img src="${
          projects[i + idxShift].images[1]
        }" alt="" class="w-full lg:w-1/2 h-96 lg:h-auto object-cover">
        <!-- Content container -->
        <div class="flex justify-center items-center p-6 w-full lg:w-1/2">
            <div class="flex flex-col space-y-8 max-w-sm">
                <h2 class="text-2xl lg:text-3xl text-medGray font-light capitalize">${
                  projects[i + idxShift].name
                }</h2>
                <p class="text-darkGray font-light">${
                  projects[i + idxShift].desc
                }</p>
                <!-- Button -->
      <div>
        <a
          href="/pages/projects/${projects[i + idxShift].name}.html"
          class="inline-block bg-lightGray text-darkGray py-8 pr-8 pl-4 uppercase tracking-verywide text-xs hover:bg-hoverGray duration-300"
          >Read more
          <img
            src="/images/elements/arrow-right.svg"
            alt=""
            class="inline ml-4"
        /></a>
      </div>
            </div>
        </div>`;
      projectsContainer.appendChild(project);
    }
  }
}

getProjects();
