/*
todoList.todos.forEach(function(todo){
    console.log(todo.todoText);
});

for (var i = 0; i < todos.length; i++){
    console.log(todos[i]);
};

//for (inicializacao, condicao, expresao final)
for(var i = 0,j=2; i < 3 && j >= 0; i++, j--){
    console.log('hey',i,j);
}
*/

var todoList = {
    todos: [],
    displayTodos: function(){
        var todos = this.todos;
        if (todos.length == 0){ //Requeriment 2
            console.log("Sua lista de afazeres está vazia!");
        }else{
            console.log("My todo list:");
            for(var i = 0; i < todos.length; i++){ //Requeriment 1
                if(todos[i].completed == true){ //Requeriment 3
                    console.log('[x]',todos[i].todoText);
                }else{
                    console.log('[ ]',todos[i].todoText);
                }
            }
        }
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        }); 
        this.displayTodos();
    }, 
    changeTodo: function(position, newTodoText) {
        this.todos[position].todoText = newTodoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    },
    toggleCompleted: function(postion){
        let todo = this.todos[postion];
        todo.completed = !todo.completed; //Recebe o próprio valor negado
        this.displayTodos();
    }
};

todoList.addTodo('Comprar leite');
todoList.changeTodo(0,'Comprar leite desnatado');
todoList.displayTodos();
todoList.toggleCompleted(0);
todoList.addTodo('Comprar laranjas');
todoList.displayTodos();
