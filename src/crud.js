export const create = (description) => {
    const tasks = JSON.parse(window.localStorage.getItem('tasks'));
    const task = {description: description, index: tasks.length + 1, completed: false};
    tasks.push(task);
    console.log(tasks);
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
}