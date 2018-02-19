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
    const newListItem = document.createElement('li');
    newListItem.textContent = newTodoFromInput;
    ulTodos.appendChild(newListItem);



    //Add Butten To TodoList
    const checkedButton = document.createElement('button');
    checkedButton.textContent = 'Checked';
    newListItem.appendChild(checkedButton);


    //Move Item From "My Todos" to "My Checked ToDos"
    checkedButton.addEventListener('click', function () {
        checkedTodos.appendChild(newListItem);
        newListItem.removeChild(checkedButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Item';
        newListItem.appendChild(deleteButton);


        //*Add Button That Delets All ToDos in CheckedTodos Column.
        //*if statment checks if there alLready a button because I onley want one button
        if (document.getElementById('deleteButtonAllTodos') === null) {
            const deleteButtonAllTodos = document.createElement('button');
            deleteButtonAllTodos.textContent = 'Delete All ToDos';
            deleteButtonAllTodos.setAttribute('id', 'deleteButtonAllTodos');
            checkedTodos.parentElement.appendChild(deleteButtonAllTodos);

            deleteButtonAllTodos.addEventListener('click', function () {
                checkedTodos.innerHTML = '';
            });
        };

        deleteButton.addEventListener('click', function () {
            checkedTodos.removeChild(newListItem);
        })

    });


});

// "beautifying" = shift + alt + f