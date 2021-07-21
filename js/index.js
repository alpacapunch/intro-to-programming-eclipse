// -- lesson 4-2
//inserting copyright text in footer
const today = new Date();
const thisYear = today.getFullYear();
//selection
const footer = document.querySelector('footer');
//create
const copyright = document.createElement('p');
//display name & current year
copyright.innerHTML = `@ Paola Myers ${thisYear}`;
copyright.classList.add('copyright')
//insert
footer.appendChild(copyright);
//creating skills list
const skills = ['JS', 'JAVA', 'C++', 'C#', 'PHP', 'SQL', 'HTML', 'CSS'];
//selection
const skillsSection = document.querySelector('#skills');
//selection
let skillsList = skillsSection.querySelector('ul');
//loop
for (let i = 0; i < skills.length; i++) {
  //storing 'li' in a variable named 'skill'
  let skill = document.createElement('li');
  skill.innerHTML = skills[i];
  //append 'skill' to 'skillsList'
  skill.classList.add('techSkills')
  skillsList.appendChild(skill);
}

// -- lesson 4-3
//selection
const messageForm = document.querySelector('[name=leave_message]')
//event listener
messageForm.addEventListener('submit', (Event) => {
  //preventing default submit event
  Event.preventDefault()
  //form field variables retrieving input
  const name = Event.target.name.value
  console.log(name)
  const email = Event.target.email.value
  console.log(email)
  const message = Event.target.message.value
  console.log(message)
  //selection
  const messageSection = document.querySelector('#messages')
  //selection
  const messageList = messageSection.querySelector('ul')
  //create
  const newMessage = document.createElement('li')
  //set
  newMessage.innerHTML = `<a href='mailto: ${email}'>${name}</a> wrote: <span>${message}</span>`
  //remove button
  const removeButton = document.createElement('button')
  //setting inner text
  removeButton.innerText = 'Remove'
  //setting type attribute
  removeButton.type = 'button'
  //click event
  removeButton.addEventListener('click', (Event) => {
    //finding parent element
    const entry = removeButton.parentNode
    entry.remove()
  })
    //append removeButton
    newMessage.appendChild(removeButton)
    //append newMessage
    messageList.appendChild(newMessage)
    //reset form
    Event.target.reset()
  //hide #messages when empty
  //if (messageList.children.length < 1) {
  //  messageSection.style.display = 'none'
  //}
})

/*  6.1 | AJAX
const githubRequest = new XMLHttpRequest()
githubRequest.addEventListener('load', function() {
     const repo = JSON.parse(this.response)
     const projectSection = document.querySelector('#projects')
     const projectList = projectSection.querySelector('ul')
     for (let i=0; i<repo.length; i++) {
         const project = document.createElement('li')
         project.innerHTML = `<a href='${repo[i].html_url}'>${repo[i].name}</a>`
         projectList.appendChild(project)
   }
})
*/

//  6.2 | API
fetch('https://api.github.com/users/alpacapunch/repos')
    .then(res => res.json())
    .then(repo => {
        const projectSection = document.querySelector('#projects')
        const projectList = projectSection.querySelector('ul')
        for (let i=0; i<repo.length; i++) {
            const project = document.createElement('li')
            project.innerHTML = `<a href='${repo[i].html_url}'>${repo[i].name}</a>`
            projectList.appendChild(project)
        }
    })
    .catch(error => console.log('There was an error loading the request', error))