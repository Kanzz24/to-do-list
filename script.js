const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-add');
const todoList = document.querySelector('.todo-list');

function removeTodo(event){
    event.target.parentNode.remove();
}

function addTodo(){
    const todo = document.createElement('div');
    todo.classList.add('todo');
    const h3 = document.createElement('h3');
    h3.innerHTML = todoInput.value;
    const bTn = document.createElement('button');
    bTn.type = 'button';
    bTn.classList.add('remove-todo');
    bTn.innerHTML = 'Delete';
    bTn.addEventListener('click',removeTodo);
    todo.append(h3,bTn);
    todoList.prepend(todo);
}

todoButton.addEventListener('click',addTodo);
