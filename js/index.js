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