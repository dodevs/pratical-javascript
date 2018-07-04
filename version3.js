var douglas = {
    nome: 'Douglas',
    dizerNome: function(){console.log(this.name)}
};

//Requeriment 1
var todos_object = {
    todos: [],
    //Requeriment 2
    displayTodos: function(){
        console.log(this.todos);
    },
    //Requeriment 3
    addTodo: function(todo) {
        this.todos.push(todo); 
        this.displayTodos();
    }, 
    //Requeriment 4
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    //Requeriment 5
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    }
};