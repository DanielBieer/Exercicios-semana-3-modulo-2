document.getElementById('task-form').addEventListener('submit', function(e){
    e.preventDefault();
    const taskInput = document.getElementById('new-task')
    const taskText = taskInput.value

    if(taskText !== ''){
        addTask(taskText);
        taskInput.value = ''
    }
})

function addTask(taskText){
    const taskList = document.getElementById('task-list')
    const taskItem = document.createElement('li')

    taskItem.textContent = taskText;
    taskItem.classList.add('task-item');
    taskItem.addEventListener('click', function(){
        taskItem.classList.toggle('done')
    })

    taskList.appendChild(taskItem)
}