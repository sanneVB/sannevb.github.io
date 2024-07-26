// Using DOM manipulation to add information to index.html 

const thisYear = new Date().getFullYear();
const footer = document.body.querySelector('footer');
const copyrightParagraph = document.createElement('p')
copyrightParagraph.innerHTML = `&copy; Sanne van Boheemen, ${thisYear}`
footer.appendChild(copyrightParagraph)

const socialMedia = document.createElement('div')
socialMedia.classList.add('socialMediaContainer')

const linkedInContainer = document.createElement('a')
const mastadonContainer = document.createElement('a')
const xitterContainer = document.createElement('a')
const githubContainer = document.createElement('a')

linkedInContainer.innerHTML = `<a href="https://www.linkedin.com/in/sanne-van-boheemen-682577148/"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.1905 2H5.80952C3.70667 2 2 3.70667 2 5.80952V30.1905C2 32.2933 3.70667 34 5.80952 34H30.1905C32.2933 34 34 32.2933 34 30.1905V5.80952C34 3.70667 32.2933 2 30.1905 2ZM11.9048 14.1905V28.6667H7.33333V14.1905H11.9048ZM7.33333 9.97714C7.33333 8.91048 8.24762 8.09524 9.61905 8.09524C10.9905 8.09524 11.8514 8.91048 11.9048 9.97714C11.9048 11.0438 11.0514 11.9048 9.61905 11.9048C8.24762 11.9048 7.33333 11.0438 7.33333 9.97714ZM28.6667 28.6667H24.0952C24.0952 28.6667 24.0952 21.6114 24.0952 21.0476C24.0952 19.5238 23.3333 18 21.4286 17.9695H21.3676C19.5238 17.9695 18.7619 19.539 18.7619 21.0476C18.7619 21.741 18.7619 28.6667 18.7619 28.6667H14.1905V14.1905H18.7619V16.141C18.7619 16.141 20.2324 14.1905 23.1886 14.1905C26.2133 14.1905 28.6667 16.2705 28.6667 20.4838V28.6667Z" class="socialMedia"/></svg></a>`
mastadonContainer.innerHTML = `<a href="https://hachyderm.io/@Moonchill"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6017 2.0004C13.5693 2.01676 9.56547 2.52871 7.48219 3.48925C7.48219 3.48925 3 5.52965 3 12.4797C3 20.7528 2.99399 31.1423 10.426 33.1515C13.2722 33.9164 15.7199 34.0811 17.6877 33.9676C21.2589 33.766 23.0251 32.6717 23.0251 32.6717L22.9052 30.033C22.9052 30.033 20.5905 30.8487 17.7242 30.7552C14.8846 30.6551 11.8932 30.442 11.4272 26.8962C11.3845 26.5665 11.3633 26.2326 11.3647 25.9002C17.3816 27.3941 22.5123 26.5508 23.9247 26.38C27.8683 25.9007 31.3013 23.4279 31.7392 21.1677C32.4254 17.6059 32.3676 12.4797 32.3676 12.4797C32.3676 5.52965 27.8932 3.48925 27.8932 3.48925C25.6965 2.4633 21.6341 1.98405 17.6017 2.0004ZM13.2863 7.30133C14.6679 7.33838 16.0331 7.95648 16.8742 9.26212L17.6877 10.6441L18.4986 9.26212C20.1874 6.63616 23.9725 6.80001 25.7734 8.8319C27.4341 10.765 27.0641 12.0126 27.0641 20.6488V20.6514H23.7969V13.1368C23.7969 9.61903 19.3121 9.48317 19.3121 13.6244V17.9788H16.0659V13.6244C16.0659 9.48317 11.5837 9.61642 11.5837 13.1342V20.6488H8.30875C8.30875 12.006 7.94535 10.7503 9.59943 8.8319C10.5066 7.80928 11.9048 7.26428 13.2863 7.30133Z" class="socialMedia"/></svg></a>`
xitterContainer.innerHTML = `<a href="https://twitter.com/Moonchill"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34 7.07804C32.8222 7.60109 31.557 7.95308 30.2291 8.11184C31.5853 7.29957 32.6253 6.01346 33.1151 4.47998C31.8475 5.23195 30.442 5.77839 28.9454 6.07377C27.7479 4.79751 26.0422 4 24.1542 4C20.5285 4 17.5896 6.9402 17.5896 10.5647C17.5896 11.0791 17.6486 11.5812 17.7594 12.06C12.3036 11.7868 7.46687 9.17272 4.22761 5.19995C3.66394 6.16976 3.34026 7.2971 3.34026 8.50198C3.34026 10.7788 4.49837 12.7886 6.25953 13.9652C5.18388 13.9307 4.17099 13.6353 3.2861 13.1443C3.2861 13.1726 3.2861 13.1984 3.2861 13.2267C3.2861 16.4081 5.54817 19.0616 8.55236 19.6634C8.00223 19.8135 7.42133 19.8935 6.82197 19.8935C6.39983 19.8935 5.98754 19.8517 5.58755 19.7766C6.42321 22.3845 8.84774 24.2835 11.7202 24.3364C9.47417 26.0976 6.64351 27.1474 3.56671 27.1474C3.0375 27.1474 2.51444 27.1167 2 27.0551C4.90573 28.9172 8.35545 30.0039 12.0636 30.0039C24.1395 30.0039 30.741 20.0006 30.741 11.3253C30.741 11.041 30.7349 10.7579 30.7226 10.4761C32.0062 9.54933 33.12 8.39368 34 7.07804Z" class="socialMedia"/></svg></a>`
githubContainer.innerHTML = `<a href="https://github.com/sanneVB""><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2C9.164 2 2 9.164 2 18C2 25.4973 7.16267 31.7707 14.1227 33.5067C14.048 33.2907 14 33.04 14 32.7293V29.9947C13.3507 29.9947 12.2627 29.9947 11.9893 29.9947C10.8947 29.9947 9.92133 29.524 9.44933 28.6493C8.92533 27.6773 8.83467 26.1907 7.536 25.2813C7.15067 24.9787 7.444 24.6333 7.888 24.68C8.708 24.912 9.388 25.4747 10.028 26.3093C10.6653 27.1453 10.9653 27.3347 12.156 27.3347C12.7333 27.3347 13.5973 27.3013 14.4107 27.1733C14.848 26.0627 15.604 25.04 16.528 24.5573C11.2 24.0093 8.65733 21.3587 8.65733 17.76C8.65733 16.2107 9.31733 14.712 10.4387 13.4493C10.0707 12.196 9.608 9.64 10.58 8.66667C12.9773 8.66667 14.4267 10.2213 14.7747 10.6413C15.9693 10.232 17.2813 10 18.66 10C20.0413 10 21.3587 10.232 22.556 10.644C22.9 10.2267 24.3507 8.66667 26.7533 8.66667C27.7293 9.64133 27.2613 12.208 26.8893 13.4587C28.004 14.7187 28.66 16.2133 28.66 17.76C28.66 21.356 26.1213 24.0053 20.8013 24.556C22.2653 25.32 23.3333 27.4667 23.3333 29.084V32.7293C23.3333 32.868 23.3027 32.968 23.2867 33.0867C29.5213 30.9013 34 24.9813 34 18C34 9.164 26.836 2 18 2Z" class="socialMedia"/></svg></a>`

socialMedia.appendChild(linkedInContainer)
socialMedia.appendChild(mastadonContainer)
socialMedia.appendChild(xitterContainer)
socialMedia.appendChild(githubContainer)

footer.appendChild(socialMedia)


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

observer.observe(target);

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

fetch('https://api.github.com/users/sanneVB/repos', {mode: 'cors'})
  .then(reponseOkCheck)
  .then(showRepos)
  .catch(errorHandling)

toggleMessagesVisibility();