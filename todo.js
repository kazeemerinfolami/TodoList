//selector
const todoinput = document.querySelector('.todo_input');
const todosubmit = document.querySelector('.todo_submit');
const todolist = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filter_todo')

//eventlistener
todosubmit.addEventListener("click",addtodo);
todolist.addEventListener('click',deleteCheck);
filterOption.addEventListener('click', filterTodo)
//function
function addtodo(event){
    //to prevent addtodo from reloading
    event.preventDefault();
    //todoDiv
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoinput.value;
    newTodo.classList.add('todo_item')
    todoDiv.appendChild(newTodo);
    //check button / mark button
    const completedbutton = document.createElement('button')
    completedbutton.innerHTML = '<i class="fas fa-check"></i>';
    completedbutton.classList.add('complete-btn');
    todoDiv.appendChild(completedbutton);
    //check trash button
    const trashbutton = document.createElement('button')
    trashbutton.innerHTML = '<i class="fas fa-trash"></i>';
    trashbutton.classList.add('trash-btn');
    todoDiv.appendChild(trashbutton);
    //append to list in HTML
    todolist.appendChild(todoDiv);
    //clear todo input after typing the value
    todoinput.value ="";
} 

function deleteCheck(e){
    const item = e.target;
    //delect todos
    if(
        item.classList[0] === 'trash-btn'){
           const todo = item.parentElement; 
           //amination
            todo.classList.add('fall')
            todo.addEventListener('transitionend', function(){
                todo.remove()
            });
            //remove the todo.remove so the delete amination will work
            //todo.remove();
        }
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}

//filter / select opion
function filterTodo(e){
const todos = todolist.childNodes;
todos.forEach(function(todo){
    switch(e.target.value){
        case 'all': 
        todo.style.display ='flex';
            break;
        case 'completed':
            if(todo.classList.contains('completed')){
              todo.style.display = 'flex';  
            }else{
                todo.style.display = 'none';
            }
            break;
        case 'uncompleted':
            if(!todo.classList.contains('completed')){
                todo.style.display ='flex';
            }else{
                todo.style.display = 'none';
            }break;
        }
})
}
