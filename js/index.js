// Using DOM manipulation to add information to index.html 

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.body.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Sanne van Boheemen, &copy;${thisYear}`;

footer.appendChild(copyright);

// List skills for the skill section and add them to index.html through DOM manipulation
const skills = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'SASS', 'Mesh Modeling', 'Solid Modeling', 'FFF 3D Printing', 'SLA 3D Printing' ];

const skillsSection = document.getElementById('skills');

const skillList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  const skill =  document.createElement('li');
  skill.innerHTML = `${skills[i]}`
  skillList.appendChild(skill)
}

