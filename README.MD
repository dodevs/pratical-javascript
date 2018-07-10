# Pratical javascript

### Version 1

- [x] it should have a place to stora todos
- [x] it should have a way to display todos
- [x] it should have a way to add new todos
- [x] it should hava a way to change a todo
- [x] it should have a way to delete a todo

### Version 2

- [x] it should have a function to display todos
- [x] it should have a function to add todos
- [x] it should have a function to change todos
- [x] it should have a function to delete todos

### Version 3

- [x] it should store the todos array on an object
- [x] it should have a displayTodos method
- [x] it should have a addTodo method
- [x] it should have a changeTodo method
- [x] it should have a deleteTodo method

### Version 4

- [x] todoList.addTodo should add objects
- [x] todoList.changeTodo should change the todoText preperty
- [x] todosList.toggleCompleted should change the completed property

### Version 5

- [x] .displayTodo should show .todoText
- [x] .displayTodo should tell you if .todos is empty
- [x] .displayTodo should show .completed

### Version 6

- [x] .toggleAll: if everything's true, make everything false.
- [x] .toggleAll: otherwise, make everything true.

### Comparisons

```javascript
{} === {} //Retorna falso porque são dois objetos que fazem referencia a endereços de memoria diferentes.
var object1 = {}
var object2 = object1 //Fazem referencia ao mesmo endereço de memoria
```

### Version 7

- [x] There should be a "Display todos" button and a "Toggle all" button in the app
- [x] Clicking "Display todos" should run todoList.displayTodos
- [x] Clicking "Toggle all" should run todoList.toggleAll()

### Version 8

- [x] it should have working controls for .addTodo
- [x] it should have working controls for .changeTodo
- [x] it should have working controls for .deleteTodo
- [x] it should have working controls for .toggleCompleted


### Version 9

- [x] There should be an li element for every todo.
- [x] Each li element should contain .todoText
- [x] Each li element should show .completed

### forEach examples:

```javascript
    //Função declarada - recebe os tres parametros do callback do forEach
    function logName(elemento, index, array){
        console.log(index, name, "of", array);
    }
    //Array de estudantes
    var students = ["David", "João", "Carlos"];
    //forEach 1 - É passado apenas o nome da função com parametro
    students.forEach(logName);
    //forEach 2 - É passada a assinatura completa da função como parametro
    students.forEach(function logname(element, index, array){
        console.log(index, element, "of", array);
    });
    //forEach 3 - É passado apenas a função sem seu nome como parametro
    students.forEach(function(element, index, array){
        console.log(index, element, "of", array);
    });
    // forEach 4 - É usado uma arrow function como parametro
    students.forEach((x,i,a)=>{console.log(i,x,"of",a)})
```

### addEventListener examples:

```javascript
    function eventFunction(evento){
        console.log("Evento ocorrido");
        console.log(evento);
    }
    //Primeiro parametro é o evento, o segundo a funcao de callback
    domElement.addEventListener('click', eventFunction);
```

### Version 10

 <blockquote> <p style="color: red;">Nao é viavel criar um eventListener para cada 'todo', pois isso não é bom para a memória. O correto é criar um unico eventListener </br>que funciona de forma genérica para todos elementos</p>  </blockquote>

- [x] There should be a way to create delete buttons
- [x] There should be a button for each todo
- [x] Each li should have an id that has the todo position
- [x] Delete buttons should have access to the todo id
- [x] Clicking delete should update todoList.todos and the DOM  

### Version 11

- [ ] todoList.toggleAll should use forEach
- [ ] views.displayTodos should use forEach