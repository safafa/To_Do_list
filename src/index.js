import 'lodash';
import './style.css';

const tasks = [{
  description: 'first task',
  completed: false,
  index: 0,
},
{
  description: 'second task',
  completed: false,
  index: 1,
},
{
  description: 'third task',
  completed: false,
  index: 2,
}];

function component() {
  const element = document.createElement('ul');
  tasks.forEach((task) => {
    const { description, completed, index } = task;
    const li = document.createElement('li');
    li.innerHTML = `Task ${index}  ${description} is completed: ${completed}`;
    element.appendChild(li);
  });

  // Lodash, now imported by this script
  return element;
}

const toDoList = document.getElementById('to_do_list');
toDoList.appendChild(component());
document.body.appendChild(toDoList);