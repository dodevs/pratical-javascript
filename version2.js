var todos = ['item1','item2','item3'];

//Requeriment 1
function displayTodos() {
    console.log('My todos:', todos);
}

displayTodos(); //My todos: [list of elements]

//Requeriment 2
function addTodo(todo){
    todos.push(todo);
    displayTodos();
}

addTodo('new item');

//Requeriment 3
function changeTodo(position, newValue){
    todos[position] = newValue;
    displayTodos();
}

changeTodo(3, 'item4');

//Requerimento 4
function deleteTodo(position){
    todos.splice(position,1);
    displayTodos();
}

deleteTodo(3);
