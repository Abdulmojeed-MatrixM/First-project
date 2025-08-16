let tasks = [];

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) li.classList.add('completed');

        // Complete button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = task.completed ? 'Undo' : 'Complete';
        completeBtn.className = 'complete-btn';
        completeBtn.onclick = () => toggleComplete(index);

        // Edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        editBtn.onclick = () => editTask(index);

        // Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = () => removeTask(index);

        li.appendChild(completeBtn);
        li.appendChild(editBtn);
        li.appendChild(removeBtn);

        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        displayTasks();
    } else {
        alert('Please enter a task.');
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function editTask(index) {
    const newText = prompt('Edit your task:', tasks[index].text);
    if (newText !== null && newText.trim() !== '') {
        tasks[index].text = newText.trim();
        displayTasks();
    }
}

document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Optional: Allow pressing Enter to add task
document.getElementById('taskInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') addTask();
});

// Initial display
displayTasks();