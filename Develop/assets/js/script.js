// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    let taskId = `task-${nextId}`;
    nextId++;
    localStorage.setItem("nextId", JSON.stringify(nextId));
    return taskId
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    let cardHtml = ``;
    return cardHtml

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    $('#todo-cards').empty();

    taskList.forEach(task => {
        let cardHtml = createTaskCard(task);
        $('#todo-cards').append(cardHtml);
    });

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();

    
    let taskName = $('#taskName').val();
    let taskDescription = $('#taskDescription').val();

    
    let newTask = {
        id: generateTaskId(),
        name: taskName,
        description: taskDescription
    };

    
    taskList.push(newTask);

   
    localStorage.setItem("tasks", JSON.stringify(taskList));

    
    renderTaskList();

    
    $('#taskName').val('');
    $('#taskDescription').val('');

    $('#formModal').modal('hide');


}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    let taskId = $(event.target).closest('.card').attr('id');

    
    taskList = taskList.filter(task => task.id !== taskId);

    
    localStorage.setItem("tasks", JSON.stringify(taskList));

    
    renderTaskList();

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    const droppedTaskId = ui.draggable.attr('id');

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList();

    
    $('#taskForm').submit(handleAddTask);

    
    $('#todo-cards').on('click', '.delete-task', handleDeleteTask);

    
    $('.lane').droppable({
        accept: '.card',
        drop: handleDrop
    });

});

