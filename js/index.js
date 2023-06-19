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

let messageArchive = [];


// Function that takes the form input, and lists it as a message in the message section
const submitMessage = (event) => {

  const user = new Object();
  user.name = event.target.usersName.value;
  user.email = event.target.usersEmail.value;
  user.message = event.target.usersMessage.value;

  messageArchive.push(user)

  const newMessage =  document.createElement('li');
  newMessage.innerHTML = `<a href="mailto:${user.email}">${user.name}</a> wrote: ${user.message}`

  removeButtonCreation(newMessage);
  editButtonCreation(newMessage);
  editForm(newMessage);
  messageList.appendChild(newMessage);
  event.preventDefault();
  event.target.reset();
  hideMessages();
  return messageArchive
}

// Function that removes the parentNode of the event 
const removeContent = (event) => {
  const entry = event.target.parentNode;
  const liIndex = parentIndex(event);
  messageArchive.splice(liIndex, 1);
  entry.remove();
  hideMessages();
}

// Function that check what the index is of the parent of an event
const parentIndex = (event) => {
  const pressedButton = event.target;
  const parentElement = pressedButton.parentNode;
  const index = Array.from(parentElement.parentNode.children).indexOf(parentElement);
  return index;
}

// Function that edits comment

const editContent = (event) => {
  const liIndex = parentIndex(event)
  const editedMessage = event.target.editedMessage.value
  const user = messageArchive[liIndex]
  user.message = editedMessage
  const parent = event.target.parentNode;
  parent.innerHTML = `<a href="mailto:${user.email}">${user.name}</a> wrote: ${user.message}`
  removeButtonCreation(parent);
  editButtonCreation(parent);
  editForm(parent);
  pressCounter = 0;
  event.preventDefault();
}

// Function that adds edit message form

const editForm = (appendTarget) => {
  const form = document.createElement('form');
  form.setAttribute('name', 'editForm');
  form.style.display = 'none';
  form.addEventListener('submit', editContent)

  const textField = document.createElement('textarea');
  textField.setAttribute('name', 'editedMessage');
  textField.setAttribute('required', 'true');
  textField.setAttribute('placeholder', 'Enter new message here');

  const submitButton = document.createElement('button')
  submitButton.setAttribute('type', 'submit');
  submitButton.innerText = 'Submit'
  

  form.appendChild(textField);
  form.appendChild(submitButton);
  appendTarget.appendChild(form);
}

// Function that shows the edit form
let pressCounter = 0;
const showEdit = (event) => {
  
  const liIndex = parentIndex(event);

  const pressedButton = event.target;
  const listing = pressedButton.parentNode;
  const form = listing.querySelector('form[name=editForm]')

  if (pressCounter === 0) {
    form.style.display = 'block';
    pressCounter++;
  } else {
    form.style.display = 'none';
    pressCounter = 0;
  }
}



// Creates the edit button and appends it to a target element
const editButtonCreation = (appendTarget) => {
  const editButton = document.createElement('button');
  editButton.innerText = 'Edit comment';
  editButton.setAttribute('type', 'button');
  editButton.addEventListener('click', showEdit)
  appendTarget.appendChild(editButton);
};

// Function that checks for number of li on message section and hides it when 0
const hideMessages = () => {
  if (messageList.getElementsByTagName('li').length === 0) {
    messageSection.style.display = 'none';
  } else {
    messageSection.style.display = 'block';
  }
}

// Creates and attaches a remove button to any messages
const removeButtonCreation = (appendTarget) => {
const removeButton = document.createElement('button');
removeButton.innerText = 'remove';
removeButton.setAttribute('type', 'button');
removeButton.addEventListener('click', removeContent)
appendTarget.appendChild(removeButton);
}


// Selects the form and ul elements and runs the submitMessage function when form is submitted
const messageForm = document.querySelector('form[name=leave_message]');
const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');
messageForm.addEventListener('submit', submitMessage);

hideMessages();