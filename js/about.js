const gridContainer = document.getElementById('grid-container');
let personas = [];

async function getPersonas() {
  const res = await fetch(
    'https://raw.githubusercontent.com/Aref-Akminasi/arch-scape/main/personas.json'
  );
  const data = await res.json();
  personas = await data;
  addPersonas(await personas);
}

function addPersonas() {
  personas.forEach((persona) => {
    const card = document.createElement('div');
    card.className = 'max-w-sm flex flex-col items-center space-y-2';
    card.innerHTML = `<img src="${persona.image}" alt="team-member" />
    <span class="text-lg text-darkGray font-bold">${persona.name}</span>
    <span class="font-light text-darkGray">${persona.func}</span>`;
    gridContainer.appendChild(card);
  });
}

getPersonas();
