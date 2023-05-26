/* exported todos */

let todos = [];
const previousTodosJSON = localStorage.getItem('javascript-local-storage');

if (previousTodosJSON !== null) {
  const parsedTodos = JSON.parse(previousTodosJSON);
  todos = parsedTodos;
}

window.addEventListener('beforeunload', (event) => {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
