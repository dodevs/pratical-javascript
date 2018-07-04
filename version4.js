var todoList = {
    todos: [],
    displayTodos: function(){
        console.log(this.todos);
    },
    //Requeriment 1
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        }); 
        this.displayTodos();
    }, 
    //Requeriment 2
    changeTodo: function(position, newTodoText) {
        this.todos[position].todoText = newTodoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    },
    //Requeriment 3
    toggleCompleted: function(postion){
        let todo = this.todos[postion];
        todo.completed = !todo.completed; //Recebe o próprio valor negado
        this.displayTodos();
    }
};