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
        //this.displayTodos();
    }, 
    changeTodo: function(position, newTodoText) {
        this.todos[position].todoText = newTodoText;
        //this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        //this.displayTodos();
    },
    toggleCompleted: function(postion){
        let todo = this.todos[postion];
        todo.completed = !todo.completed; //Recebe o próprio valor negado
        //this.displayTodos();
    },
    toggleAll: function(){
        var todos = this.todos;
        totalTodos = todos.length;
        completedTodos = 0;

        // Conta quantos 'todos' estão completos
        for(var i = 0; i < totalTodos; i++){
            if(todos[i].completed == true){
                completedTodos++;
            }
        }

        // Caso 1: se todos 'todos' estao 'true', os defina como 'false'
        if(completedTodos == totalTodos){
            for(var i =0; i < totalTodos; i++){
                todos[i].completed = false;
            }
        } else{ //Outro caso
            for(var i = 0; i < totalTodos; i++){
                todos[i].completed = true;
            }
        }
        //this.displayTodos();
    }
};