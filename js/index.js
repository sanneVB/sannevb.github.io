// Using DOM manipulation to add information to index.html 

const thisYear = new Date().getFullYear();
const footer = document.body.querySelector('footer');
footer.innerHTML += `<p>Sanne van Boheemen, &copy;${thisYear}</p>`;

// List skills for the skill section and add them to index.html through DOM manipulation

const skills = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'SASS', 'Mesh Modeling', 'Solid Modeling', 'FFF 3D Printing', 'SLA 3D Printing' ];

const skillList = document.getElementById('skills').querySelector('ul')
skills.forEach(skill => {
  skillList.innerHTML += `<li class="tag">${skill}</li>`
})

// Message section


// Function that takes the form input and creates 

const submitMessageForm = (event) => {
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;
  
  const submitMessageForm =  document.createElement('li');
  submitMessageForm.innerHTML = `<a href="mailto:${userEmail}">${userName}</a> wrote: ${userMessage}`;
  createRemoveButton(submitMessageForm);
  createEditButton(submitMessageForm);
  createEditForm(submitMessageForm);
  event.preventDefault();
  event.target.reset();
  document.getElementById('messagesList').appendChild(submitMessageForm);
  toggleMessagesVisibility();
}


// Creates the edit button and appends it to a target element
const createEditButton = (appendTarget) => {
  const editButton = document.createElement('button');
  editButton.innerText = 'Edit message';
  editButton.setAttribute('class', 'formButton')
  editButton.setAttribute('type', 'button');
  editButton.addEventListener('click', toggleEditFormVisibility)
  appendTarget.appendChild(editButton);
};

// Creates and attaches a remove button to any messages
const createRemoveButton = (appendTarget) => {
  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.setAttribute('class', 'formButton')
  removeButton.setAttribute('type', 'button');
  removeButton.addEventListener('click', removeContent)
  appendTarget.appendChild(removeButton);
}

// Function that removes the parentNode of the event 
const removeContent = (event) => {
  event.target.parentNode.remove()
  toggleMessagesVisibility()
}

// Function that adds edit message form
const createEditForm = (appendTarget) => {
  const form = document.createElement('form');
  form.setAttribute('name', 'editForm');
  form.style.display = 'none';
  form.addEventListener('submit', submitEditForm)

  const textField = document.createElement('textarea');
  textField.setAttribute('name', 'editedMessage');
  textField.setAttribute('required', 'true');
  textField.setAttribute('placeholder', 'Enter new message here');

  const submitButton = document.createElement('button')
  submitButton.setAttribute('class', 'formButton')
  submitButton.setAttribute('type', 'submit');
  submitButton.innerText = 'Submit'
  
  form.appendChild(textField);
  form.appendChild(submitButton);
  appendTarget.appendChild(form);
}  

// Function that edits comment
const submitEditForm = (event) => {
  event.preventDefault();
  const listing = event.target.parentNode;
  const userName = listing.querySelector('a').innerHTML;
  const userEmail = listing.querySelector('a').getAttribute('href')
  const submitMessageForm = event.target.editedMessage.value;
  listing.innerHTML = `<a href='${userEmail}'>${userName}</a> wrote: ${submitMessageForm}`
  createRemoveButton(listing);
  createEditButton(listing);
  createEditForm(listing);
  event.target.reset();
}

// Function that shows/hides edit form
const toggleEditFormVisibility = (event) => {
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
messageForm.addEventListener('submit', submitMessageForm);

// Function that checks for number of li on message section and hides it when 0
const toggleMessagesVisibility = () => {
  const messageSection = document.getElementById('messages')
  if (messageSection.getElementsByTagName('li').length === 0) {
    messageSection.style.display = 'none';
  } else {
    messageSection.style.display = 'block';
  }
}

// Lesson 6-2

let repoLanguages = [];

function showRepos(apiData) {
  const projectSection = document.getElementById('projects');
  const projectList = projectSection.querySelector('ul');

  // for (let i = 0; i < apiData.length; i++) {
  //   let project = document.createElement('li');
  //   project.innerText = apiData[i].name;
  //   projectList.appendChild(project)
  // }

  for (let i = 0; i < apiData.length; i++) {
    let projectListing = document.createElement('li');
    let projectContainer = document.createElement('div');
    let projectTextContainer = document.createElement('div');
    let projectLink = document.createElement('a');
    let projectDesc = document.createElement('p');

    let projectLanguageList = document.createElement('ul')


    // console.log(apiData[i])

    let repoUrl = apiData[i].svn_url;
    let repoName = apiData[i].name;
    let repoDesc = apiData[i].description;
    let repoLanguagesUrl = apiData[i].languages_url

    fetch(repoLanguagesUrl, {mode: 'cors'})
      .then(reponseOkCheck)
      .then((languages) => { 
        console.log(languages)
        const keys = Object.keys(languages)
        const langNumber = Object.values(languages)
        const langTotal = langNumber.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        );
        keys.forEach((language, index) => {
          let projectLanguage = document.createElement('li')
          projectLanguage.setAttribute('class', 'tag language')
          let languagePercentage = (Math.round((langNumber[index]/langTotal)*1000))/10
          projectLanguage.innerText = `${language}: ${languagePercentage}%`
          projectLanguageList.appendChild(projectLanguage)
        })
      })
      .catch(errorHandling);

      


    projectLink.setAttribute('href', repoUrl)
    projectLink.innerText = repoName

    projectDesc.innerText = repoDesc


    projectTextContainer.setAttribute('class', 'textContainer')
    projectTextContainer.appendChild(projectLink)
    projectTextContainer.appendChild(projectDesc)
          
    projectContainer.setAttribute('class', 'repoCard')
    projectContainer.appendChild(projectTextContainer)
    projectContainer.appendChild(projectLanguageList)

    projectListing.appendChild(projectContainer)


    // const newHTML = `<a href='${repoUrl}' class='repoCard'>${repoName}</a>`

    // projectListing.innerHTML = newHTML;
    projectList.appendChild(projectListing)
  }
}

function errorHandling(error) {
  // Original taken from: https://rapidapi.com/guides/error-handling-fetch
  if(error.message.includes('404')) {
    console.error('404 error. Check if url is correct. If it is, check auth token.', error);
  } else {
    console.error('Fetch error: ', error)
  }
}

function reponseOkCheck (response) {
  if (response.ok) {
    return response.json()
  } else {
    throw new Error(`Response status: ${response.status}`)
  }
}

let target = document.querySelector("#bigName")
let headerName = document.getElementById('headerName')


const observer = new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting) {
    headerName.classList.add('isVisible');
  } else {
    headerName.classList.remove('isVisible');
  }
})

const colors = {
  white:'#FFF',
  orange:'#ED9E05',
  black:'#1a1a1a',
  gray:'#313131',
  beige:'#dddddd',
  blackTransparant:'rgba(0,0,0,0.2)',
  whiteTransparant:'rgba(255, 255, 255, 0.2)',
}

function toggleColorModes() {
  const root = document.documentElement;
  const mainColor = getComputedStyle(root).getPropertyValue('--main-color');
  const accentColor = getComputedStyle(root).getPropertyValue('--accent-color');
  const passiveColor = getComputedStyle(root).getPropertyValue('--passive-color');
  const backdropColor = getComputedStyle(root).getPropertyValue('--backdrop-color');
  const beige = getComputedStyle(root).getPropertyValue('--beige');
  const passiveColorTransparant = getComputedStyle(root).getPropertyValue('--passive-color-transparant');
  const mainColorTransparant = getComputedStyle(root).getPropertyValue('--main-color-transparant');
  const navLinkColor = getComputedStyle(root).getPropertyValue('--nav-link-color');
  const tagBorderColor = getComputedStyle(root).getPropertyValue('--tag-border-color');
  const tagTextColor = getComputedStyle(root).getPropertyValue('--tag-text-color');

  if (document.body.classList.contains('darkMode')) {
    root.style.setProperty('--main-color', colors.black)
    root.style.setProperty('--accent-color', colors.orange)
    root.style.setProperty('--passive-color', colors.white)
    root.style.setProperty('--backdrop-color', colors.beige)
    root.style.setProperty('--beige', colors.beige)
    root.style.setProperty('--passive-color-transparant', colors.whiteTransparant)
    root.style.setProperty('--main-color-transparant', colors.blackTransparant)
    root.style.setProperty('--nav-link-color', colors.orange)
    root.style.setProperty('--tag-border-color', colors.orange)
    root.style.setProperty('--tag-text-color', colors.black)


    document.body.classList.remove('darkMode')
    document.body.classList.add('lightMode')
  } else if (document.body.classList.contains('lightMode')) {
    root.style.setProperty('--main-color', colors.white)
    root.style.setProperty('--accent-color', colors.orange)
    root.style.setProperty('--passive-color', colors.black)
    root.style.setProperty('--backdrop-color', colors.gray)
    root.style.setProperty('--beige', colors.beige)
    root.style.setProperty('--passive-color-transparant', colors.blackTransparant)
    root.style.setProperty('--main-color-transparant', colors.whiteTransparant)
    root.style.setProperty('--nav-link-color', colors.black)
    root.style.setProperty('--tag-border-color', colors.white)
    root.style.setProperty('--tag-text-color', colors.orange)


    document.body.classList.remove('lightMode')
    document.body.classList.add('darkMode')
  } else {
    console.error(`I don't know how I managed but here doesn't appear to be a light or dark mode class on the body`);
  }

  
}

observer.observe(target);

fetch('https://api.github.com/users/sanneVB/repos', {mode: 'cors'})
  .then(reponseOkCheck)
  .then(showRepos)
  .catch(errorHandling)

toggleMessagesVisibility();