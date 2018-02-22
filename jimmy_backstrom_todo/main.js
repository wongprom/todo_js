const input = document
    .getElementById('input');
const button_NewTodo = document
    .getElementById('button_NewTodo');
const ulTodos = document
    .getElementById('ulTodos');
const checkedTodos = document
    .getElementById('checkedTodos');



/*function skapaKnapp(){
    button_NewTodo.addEventListener('click', function () {
        const newTodoFromInput = input.value;
        const newListItem = document.createElement('li');
        newListItem.textContent = newTodoFromInput;
        ulTodos.appendChild(newListItem);
        
        });
        
}
skapaKnapp();*/


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
    checkedButton.addEventListener('click', function checkTodo() {
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
            deleteButtonAllTodos.style.alignSelf = 'center';
            checkedTodos.parentElement.appendChild(deleteButtonAllTodos);

            deleteButtonAllTodos.addEventListener('click', deleteAllTodos);
        };

        deleteButton.addEventListener('click', function(){
            deleteListItem(newListItem);
        });

    });

});//sist i coden


function deleteListItem(itemToRemove) {
    checkedTodos.removeChild(itemToRemove);
}

function deleteAllTodos(){
    checkedTodos.innerHTML = '';
}

//övningar function i function
//Vi kan skapa en funktion inuti en annan funktion. Vi kan även returnera en anonym funktion från en funktion. T.ex.:

//Deklarera en funktion i en funktion samt kalla på den funktionen inuti
//I detta fall kallas den inre funktionen på direkt inuti den yttre funktionen
function myOuterFunction(){

    function myInnerFunction(){

    }
    myInnerFunction();
}

//När vi kallar på den yttre funktionen kommer båda funktionerna att köras
myOuterFunction();

//Man kan även returnera en funktion inuti den yttre funktionen
function myOuterFunction2(){
    return function(){
      console.log('Tjena');
    }
}

//Hur vi kallar på funktionen ovan
var inner = myOuterFunction2();
//Nu lagras den inre funktionen i var inner och kan avändas som en funktion
inner();

/*
När vi skapar en funktion i en annan funktion skapar vi automatiskt en Closure. JavaScript sparar alla variabler i den yttre funktionen så att den inre funktionen kan använda dem utifall de behövs. I vanliga fall när man kallar på en funktion så finns funktionens variabler tillgängliga när funktionen körs och när funktionen har kört klart går de inte att komma åt längre. Detta gäller dock inte Closures då den inre funktionen har tillgång till den yttre funktionens variabler även fast den yttre funktionen har körts klart:

Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope). In other words, these functions 'remember' the environment in which they were created.
*/




// "beautifying" = shift + alt + f