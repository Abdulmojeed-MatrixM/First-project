// Get DOM elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Add a new task to the list
function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
        todoInput.focus();
        return;
    }

    // Create list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Action buttons container
    const actionBtns = document.createElement('div');
    actionBtns.className = "action-btns";

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";
    completeBtn.onclick = () => {
        li.classList.toggle('completed');
    };

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => {
        todoList.removeChild(li);
    };

    // Append buttons
    actionBtns.appendChild(completeBtn);
    actionBtns.appendChild(deleteBtn);
    li.appendChild(actionBtns);

    // Add to list
    todoList.appendChild(li);

    // Clear input
    todoInput.value = "";
    todoInput.focus();
}

// Add task on button click
addBtn.addEventListener('click', addTask);

// Add task on Enter key
todoInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') addTask();
});