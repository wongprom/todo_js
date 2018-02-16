
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
    })
      

});









/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>List</title>
</head>
<body>
    <ul id="todo">
        <li>Köpa mjölk</li>
        <li>Lära mig JavaScript</li>
        <li>Leka med DOMen</li>
        <li>DOOMSDAY</li>
    </ul> 
    <ul id="done">
        
    </ul>
</body>
</html>
*/
