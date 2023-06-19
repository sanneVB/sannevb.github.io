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


// Function that takes the form input and creates 

const newMessage = (event) => {
  userName = event.target.usersName.value;
  userEmail = event.target.usersEmail.value;
  userMessage = event.target.usersMessage.value;
  
  const newMessage =  document.createElement('li');
  newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a> wrote: ${userMessage}`;
  removeButtonCreation(newMessage);
  editButtonCreation(newMessage);
  editForm(newMessage);
  event.preventDefault();
  event.target.reset();
  document.getElementById('messagesList').appendChild(newMessage);
  hideMessages();
}


// Creates the edit button and appends it to a target element
const editButtonCreation = (appendTarget) => {
  const editButton = document.createElement('button');
  editButton.innerText = 'Edit message';
  editButton.setAttribute('type', 'button');
  editButton.addEventListener('click', showEdit)
  appendTarget.appendChild(editButton);
};

// Creates and attaches a remove button to any messages
const removeButtonCreation = (appendTarget) => {
  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.setAttribute('type', 'button');
  removeButton.addEventListener('click', removeContent)
  appendTarget.appendChild(removeButton);
}

// Function that removes the parentNode of the event 
const removeContent = (event) => {
  event.target.parentNode.remove()
  hideMessages()
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

// Function that edits comment
const editContent = (event) => {
  event.preventDefault();
  const listing = event.target.parentNode;
  const userName = listing.querySelector('a').innerHTML;
  const userEmail = listing.querySelector('a').getAttribute('href')
  const newMessage = event.target.editedMessage.value;
  listing.innerHTML = `<a href='${userEmail}'>${userName}</a> wrote: ${newMessage}`
  removeButtonCreation(listing);
  editButtonCreation(listing);
  editForm(listing);
  event.target.reset();
}

// Function that shows/hides edit form
const showEdit = (event) => {
  const listing = event.target.parentNode;
  const form = listing.querySelector('form')
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
}

// Determines the action for the submit button on the message form
const messageForm = document.querySelector('form[name=leave_message]');
messageForm.addEventListener('submit', newMessage);

// Function that checks for number of li on message section and hides it when 0
const hideMessages = () => {
  const messageSection = document.getElementById('messages')
  const messageList = document.getElementById('messagesList'); // Can be removed and replaced with messageSection?
  if (messageList.getElementsByTagName('li').length === 0) {
    messageSection.style.display = 'none';
  } else {
    messageSection.style.display = 'block';
  }
}

hideMessages();