
const input = document
    .getElementById('input');
const button_NewTodo = document
    .getElementById('button_NewTodo');
const ulTodos = document.getElementById('ulTodos');

// Add New Todo From Input
button_NewTodo.addEventListener('click', function(){
    const newTodoFromInput = input.value;
    const newListItem = document.createElement('li');
    newListItem.textContent = newTodoFromInput;
    ulTodos.appendChild(newListItem);
});


