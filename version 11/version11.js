// todoList object
var todoList = {
    todos: [],
    addTodo: function(todoText) {
        //Adiciona um novo objeto ao array
        this.todos.push({
            todoText: todoText,
            completed: false
        }); 
    }, 
    changeTodo: function(position, newTodoText) {
        this.todos[position].todoText = newTodoText;
    },
    deleteTodo: function(position) {
        //A função spilce apaga apartir de determinada posição
        this.todos.splice(position,1);
    },
    toggleCompleted: function(postion){
        let todo = this.todos[postion];
        todo.completed = !todo.completed; //Recebe o próprio valor negado
    },
    toggleAll: function(){
        var todos = this.todos;
        var totalTodos = todos.length;
        var completedTodos = 0;

        //forEach implementation
        todos.forEach(function(todo){
            if(todo.completed == true){
                completedTodos++;
            }
        })

        // Caso 1: se todos 'todos' estao 'true', os defina como 'false'
        if(completedTodos == totalTodos){
            //forEach implementation
            todos.forEach(function(todo){
                todo.completed = false;
            })
        } else{ //Outro caso
            todos.forEach(function(todo){
                todo.completed = true;
            })

        }
    }
};

//Refactored
var handlers = {
    toggleAll: function(){
        todoList.toggleAll();
        views.displayTodos();
    },
    addTodo: function(){
        //A variavel recebe o elemento do DOM correspondente ao ID
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        var todoText = addTodoTextInput.value;
        todoList.addTodo(todoText);
        addTodoTextInput.value = ''; //Limpa o text input
        views.displayTodos();
    },
    changeTodo: function(){
        var changeTodoNumberInput = document.getElementById('changeTodoNumberInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        var todoPosition = changeTodoNumberInput.valueAsNumber;
        var todoText = changeTodoTextInput.value;
        todoList.changeTodo(todoPosition,todoText);
        changeTodoNumberInput.value = '';
        changeTodoTextInput.value = '';
        views.displayTodos();
    },
    deleteTodo: function(id){
        todoList.deleteTodo(id);
        views.displayTodos();
    },
    toggleCompleted: function(){
        var toggleCompletedNumberInput = document.getElementById('toggleCompletedNumberInput');
        var todoPosition = toggleCompletedNumberInput.valueAsNumber;
        todoList.toggleCompleted(todoPosition);
        toggleCompletedNumberInput.value = '';
        views.displayTodos();
    }
};

// Um novo objeto responsável pelo o que o usuário ve.
var views = {
  displayTodos: function(){
    var todoUl = document.querySelector('ul'); //Faz um busca pelo elemento e armazena a primeira ocorrencia
    todoUl.innerHTML = ''; // define o conteudo (childs) do html como vazio

    //Deve ser passado o 'this' como segundo parametro para o forEach. Assim esse será o 'this' do callback
    todoList.todos.forEach(function(todo, i){
      var todoLi = document.createElement('li'); //Cria um novo elemento em cada iteração
      //var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      if(todo.completed == true){
        todoTextWithCompletion = "[x] " + todo.todoText;
      }else{
        todoTextWithCompletion = "[ ] " + todo.todoText;
      }
      
      todoLi.id = i //todoLi.setAttribute('id',i);
      todoLi.textContent = todoTextWithCompletion; //Adicona a propriedade .todoText no texto do elemento li
      todoLi.appendChild(this.createDeleteButton());
      todoUl.appendChild(todoLi); //Adiciona o element li no elemento ul
    },this)
  },
  createDeleteButton: function(){
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.className = "deleteButton";

    return deleteButton
  },
  setUpEventListeners: function(){  
    var todoUl = document.querySelector('ul');
    todoUl.addEventListener('click', function(event){

      var element = event.target;

      if(element.className == "deleteButton"){
        var parentElementId = parseInt(element.parentNode.id); //Cast to integer
        handlers.deleteTodo(parentElementId);
      }
    }); 
  }
};

views.setUpEventListeners();