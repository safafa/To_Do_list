import 'lodash';
import './style.css';
import { checkCompletion, status } from './checkbox.js';
import { create, remove } from './crud.js';

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
    const icon = document.createElement('button');
    icon.className = 'far fa-trash-alt';
    icon.addEventListener('click', () => {
      remove(task);
    });
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

window.addEventListener('load', () => {
  document.getElementById('form').reset();
  if (JSON.parse(window.localStorage.getItem('tasks')) === null) {
    window.localStorage.setItem('tasks', JSON.stringify([]));
  }
  const tasks = JSON.parse(window.localStorage.getItem('tasks'));
  toDoList.removeChild(toDoList.firstChild);
  toDoList.appendChild(renderList(tasks));
});

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.getElementById('task').value;
  create(description);
  window.location.reload();
});
