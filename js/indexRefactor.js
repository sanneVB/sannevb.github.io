// Using DOM manipulation to add information to index.html 

const thisYear = new Date().getFullYear();
const footer = document.body.querySelector('footer');
footer.innerHTML += `<p>Sanne van Boheemen, &copy;${thisYear}</p>`;

// List skills for the skill section and add them to index.html through DOM manipulation

const skills = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'SASS', 'Mesh Modeling', 'Solid Modeling', 'FFF 3D Printing', 'SLA 3D Printing' ];

const skillList = document.getElementById('skills').querySelector('ul')
skills.forEach(skill => {
  skillList.innerHTML += `<li>${skill}</li>`
})

// Message section

const userArchive = [];

// Function that takes the form input and creates 

const submitMessage = (event) => {
  const user = new Object();
  user.name = event.target.usersName.value;
  user.email = event.target.usersEmail.value;
  user.message = event.target.usersMessage.value;
  userArchive.push(user);
}

// Function that processes the userArchive array then 
// creates a list element for each objectinside the unsorted list element 

const populateMessageSection = (event) => {
  submitMessage(event);
  const messageList = document.getElementById('messages').querySelector('ul');
  userArchive.forEach((user) => {
    messageList.innerHTML += `<li><a href="mailto:${user.email}">${user.name}</a> wrote: ${user.message}</li>`
  })
}