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

function renderList() {
  const element = document.getElementById('ulTask');
  tasks.forEach((task) => {
    const { description } = task;
    const li = document.createElement('li');
    const checkbox = document.createElement('INPUT');
    checkbox.setAttribute('type', 'checkbox');
    li.appendChild(checkbox);
    const span = document.createElement('span');
    span.innerText = ` ${description}`;
    li.appendChild(span);
    const icon = document.createElement('i');
    icon.setAttribute('class', 'fas fa-ellipsis-v');
    li.appendChild(icon);
    element.appendChild(li);
  });
  const button = document.createElement('button');
  button.id = 'clearAll';
  button.innerText = 'Clear all completed';
  element.appendChild(document.createElement('li').appendChild(button));

  return element;
}

const toDoList = document.getElementById('to_do_list');
toDoList.appendChild(renderList());
