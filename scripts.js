// Seleção de Elmentos 

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");


// Funções

const saveTodo = (text) => {

const todo = document.createElement("div");
todo.classList.add("todo");

const todoTitle = document.createElement("h3");
todoTitle.innerText = text
todo.appendChild(todoTitle);

console.log(todo);

}

// Eventos 

todoForm.addEventListener ("submit", (e) => {
e.preventDefault();

const inputValue = todoInput.Value;

if (inputValue)  {

   saveTodo(inputValue)

}


});





// Eventos

