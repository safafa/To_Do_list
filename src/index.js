import 'lodash';
import './style.css';
import { checkCompletion, status } from './checkbox.js';

function renderList(tasks) {
  const element = document.getElementById('ulTask');
  tasks.forEach((task) => {
    const { description, completed } = task;
    const li = document.createElement('li');
    const checkbox = document.createElement('INPUT');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', () => {
      checkCompletion(checkbox.checked, task);
      window.localStorage.setItem('tasks', JSON.stringify(tasks));
    });
    li.appendChild(checkbox);
    status(checkbox, completed);
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

window.addEventListener('load', () => {
  if (JSON.parse(window.localStorage.getItem('tasks')) === null) {
    window.localStorage.setItem('tasks', JSON.stringify([{
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
    }]));
  }
  const tasks = JSON.parse(window.localStorage.getItem('tasks'));
  const toDoList = document.getElementById('to_do_list');
  toDoList.appendChild(renderList(tasks));
});
