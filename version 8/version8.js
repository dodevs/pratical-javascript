var todoList = {
    todos: [],
    displayTodos: function(){
        var todos = this.todos;
        if (todos.length == 0){
            console.log("Sua lista de afazeres está vazia!");
        }else{
            console.log("My todo list:");
            for(var i = 0; i < todos.length; i++){
                if(todos[i].completed == true){
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

//Refactored
var handlers = {
    displayTodos: function(){
        todoList.displayTodos();
    },
    toggleAll: function(){
        todoList.toggleAll();
    },
    addTodo: function(){
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        var todoText = addTodoTextInput.value;
        todoList.addTodo(todoText);
        addTodoTextInput.value = ''; //Limpa o text input
    },
    changeTodo: function(){
        var changeTodoNumberInput = document.getElementById('changeTodoNumberInput');
        var changeTodotextInput = document.getElementById('changeTodoTextInput');
        var todoPosition = changeTodoNumberInput.valueAsNumber;
        var todoText = changeTodoTextInput.value;
        todoList.changeTodo(todoPosition,todoText);
        changeTodoNumberInput.value = '';
        changeTodotextInput.value = '';
    },
    deleteTodo: function(){
        var deleteTodoNumberInput = document.getElementById('deleteTodoNumberInput');
        var todoPosition = deleteTodoNumberInput.valueAsNumber;
        todoList.deleteTodo(todoPosition);
        deleteTodoNumberInput.value = '';
    },
    toggleCompleted: function(){
        var toggleCompletedNumberInput = document.getElementById('toggleCompletedNumberInput');
        var todoPosition = toggleCompletedNumberInput.valueAsNumber;
        todoList.toggleCompleted(todoPosition);
        toggleCompletedNumberInput.value = '';
    }
};