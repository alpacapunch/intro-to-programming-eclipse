// -- lesson 4-2
//inserting copyright text in footer
const today = new Date();
const thisYear = today.getFullYear();
//selection
const footer = document.querySelector('footer');
//create
const copyright = document.createElement('p');
//display name & current year
copyright.innerHTML = `Paola Myers ${thisYear}`;
//insert
footer.appendChild(copyright);
//creating skills list
const skills = ['JavaScript', 'JAVA', 'C++', 'C#', 'PHP', 'SQL', 'HTML', 'CSS'];
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
  console.log('name')
  const email = Event.target.email.value
  console.log('email')
  const message = Event.target.message.value
  console.log('message')
  //selection
  const messageSection = document.querySelector('#messages')
  //selection
  const messageList = messageSection.querySelector('ul')
  //create
  const newMessage = document.createElement('li')
  //set 
  newMessage.innerHTML = `<a href = "mailto:${email}">${name}</a> wrote: <span>${message}</span> `
  //remove button
  const removeButton = document.createElement('button')
  //setting inner text
  removeButton.innerText = 'remove'
  //setting type attribute
  removeButton.type = 'button'
  //click event
  removeButton.addEventListener('click', (Event) => {
    //finding parent element
    const entry = Event.target.parentNode
    entry.remove()
  })
  //hide #messages when empty
  if (messageList.children.length < 1) {
    messageSection.style.display = 'none'
  }
  //append removeButton
  newMessage.appendChild(removeButton)
  //append newMessage
  messageList.appendChild(newMessage)
  //reset form
  Event.target.reset()
})