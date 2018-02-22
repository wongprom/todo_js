const input = document
    .getElementById('input');
const button_NewTodo = document
    .getElementById('button_NewTodo');
const ulTodos = document
    .getElementById('ulTodos');
const checkedTodos = document
    .getElementById('checkedTodos');

// Add New Todo From Input
button_NewTodo.addEventListener('click', function () {
    const newTodoFromInput = input.value;
    input.value = "";
    const newListItem = document.createElement('li');
    newListItem.textContent = newTodoFromInput;

    ulTodos.appendChild(newListItem);


    //Add Butten To TodoList
    const checkedButton = document.createElement('button');
    checkedButton.textContent = 'Checked';
    checkedButton.style.backgroundColor = 'rgb(255, 230, 59)';
    checkedButton.style.marginLeft = '5px';
    newListItem.appendChild(checkedButton);


    //Move Item From "My Todos" to "My Checked ToDos"
    checkedButton.addEventListener('click', function checkTodo() {
        checkedTodos.appendChild(newListItem);
        newListItem.removeChild(checkedButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Item';
        deleteButton.style.backgroundColor = 'rgb(207, 83, 0)';
        deleteButton.style.marginLeft = '5px';
        newListItem.appendChild(deleteButton);


        //*Add Button That Delets All ToDos in CheckedTodos Column.
        //*if statment checks if there alLready a button because I onley want one button
        if (document.getElementById('deleteButtonAllTodos') === null) {
            const deleteButtonAllTodos = document.createElement('button');
            deleteButtonAllTodos.textContent = 'Delete All Items';
            deleteButtonAllTodos.setAttribute('id', 'deleteButtonAllTodos');
            deleteButtonAllTodos.style.alignSelf = 'center';
            deleteButtonAllTodos.style.backgroundColor = 'red';
            checkedTodos.parentElement.appendChild(deleteButtonAllTodos);

            deleteButtonAllTodos.addEventListener('click', deleteAllTodos);
        };

        deleteButton.addEventListener('click', function () {
            deleteListItem(newListItem);
        });

    });

});

// try to get function out of functions
function deleteListItem(itemToRemove) {
    checkedTodos.removeChild(itemToRemove);
}

function deleteAllTodos() {
    checkedTodos.innerHTML = '';
}