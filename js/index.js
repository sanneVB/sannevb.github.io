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
  skill.innerHTML = `${skills[i]}`;
  skillList.appendChild(skill);
}

// Message section

// Function that takes the form input, and lists it as a message in the message section
const submitMessage = (event) => {
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

  const newMessage =  document.createElement('li');
  newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a> wrote: ${userMessage}`;

  removeButtonCreation(newMessage);
  messageList.appendChild(newMessage);
  console.log(`${userName}, ${userEmail}, ${userMessage}`);
  event.preventDefault();
  event.target.reset();
  hideMessages();
}

// Function that removes the parentNode of the event that initiates it
const removeContent = (event) => {
  const entry = event.target.parentNode;
  entry.remove();
  hideMessages();
}

  // Creates and attaches the remove function to a target
const removeButtonCreation = (appendTarget) => {
  const removeButton = document.createElement('button');
  removeButton.innerText = 'remove';
  removeButton.setAttribute('type', 'button');
  removeButton.addEventListener('click', removeContent);
  appendTarget.appendChild(removeButton);
};

// Function that checks for number of li on message section and hides it when 0
const hideMessages = () => {
  const messagesList = document.getElementById('messagesList');
  if (messageList.getElementsByTagName('li').length === 0) {
    messageSection.style.display = 'none';
  } else {
    messageSection.style.display = 'block';
  }
}



// Selects the form and ul elements and runs the submitMessage function when form is submitted
const messageForm = document.querySelector('form[name=leave_message]');
const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');
messageForm.addEventListener('submit', submitMessage);

hideMessages();