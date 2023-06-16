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

let userList = []


// Function that takes the form input, and lists it as a message in the message section
const submitMessage = (event) => {
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

  const user = new Object();
  user.name = event.target.usersName.value;
  user.email = event.target.usersEmail.value;
  user.message = event.target.usersMessage.value;

  userList.push(user)

  const newMessage =  document.createElement('li');
  newMessage.innerHTML = `<a href="mailto:${user.email}">${user.name}</a> wrote: ${user.message}`

  newMessage.appendChild(removeButton);
  newMessage.appendChild(editButton);
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

// Function that check what the index is of the parent of the pressed button
const parentIndex = (event) => {
  const pressedButton = event.target;
  const content = pressedButton.parentNode;
  const index = Array.from(content.parentNode.children).indexOf(content);
  return index;
}

// Function that edits comment

const editContent = (event) => {
  const liIndex = parentIndex(event);

  userList[liIndex].message = 'Edited Message'

  content.innerHTML = `<a href="mailto:${userList[liIndex].email}">${userList[liIndex].name}</a> wrote: ${userList[liIndex].message}`
  content.appendChild(removeButton);
  content.appendChild(editButton)
}

// Edit button 
const editButton = document.createElement('button');
editButton.innerText = 'Edit comment';
editButton.setAttribute('type', 'button');
editButton.addEventListener('click', editContent)

// Function that checks for number of li on message section and hides it when 0
const hideMessages = () => {
  const messagesList = document.getElementById('messagesList');
  if (messageList.getElementsByTagName('li').length === 0) {
    messageSection.style.display = 'none';
  } else {
    messageSection.style.display = 'block';
  }
}

// Creates and attaches a remove button to any messages
const removeButton = document.createElement('button');
removeButton.innerText = 'remove';
removeButton.setAttribute('type', 'button');
removeButton.addEventListener('click', removeContent)

// Selects the form and ul elements and runs the submitMessage function when form is submitted
const messageForm = document.querySelector('form[name=leave_message]');
const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');
messageForm.addEventListener('submit', submitMessage);

hideMessages();