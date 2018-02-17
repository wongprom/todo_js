
const input = document
    .getElementById('input');
const button_NewTodo = document
    .getElementById('button_NewTodo');
const ulTodos = document
    .getElementById('ulTodos');
const checkedTodos = document
    .getElementById('checkedTodos');


// Add New Todo From Input
button_NewTodo.addEventListener('click', function(){
    const newTodoFromInput = input.value;
    const newListItem = document.createElement('li');
    newListItem.textContent = newTodoFromInput;
    ulTodos.appendChild(newListItem);

    //Add Butten To TodoList
    const checkedButton = document.createElement('button');
    checkedButton.textContent = 'Checked';
    newListItem.appendChild(checkedButton);

    //Move Item From "My Todos" to "My Checked ToDos"
    checkedButton.addEventListener('click', function(){  
        ulTodos.removeChild(newListItem);
        checkedButton.textContent = 'Delete Item';
        checkedTodos.appendChild(newListItem);  
            
    });

    //Remove Item From Checked Todos
        
    checkedButton.addEventListener('click', function(){
        checkedTodos.removeChild(newListItem);
    });

});

