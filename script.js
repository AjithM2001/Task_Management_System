document.addEventListener('DOMContentLoaded', () => {
    const taskTitle = document.getElementById('task-title');
    const taskDesc = document.getElementById('task-desc');
    const addTaskBtn = document.getElementById('add-task');
    const taskList = document.getElementById('tasks');

    addTaskBtn.addEventListener('click', () => {
        const title = taskTitle.value.trim();
        const desc = taskDesc.value.trim();

        if (title === '') {
            alert("Task title cannot be empty!");
            return;
        }

        // Create task element
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
        taskItem.innerHTML = `
            <div>
                <strong>${title}</strong>
                <p>${desc}</p>
            </div>
            <div>
                <button class="complete-btn">✔</button>
                <button class="delete-btn">✖</button>
            </div>
        `;

        // Add event listeners
        taskItem.querySelector('.complete-btn').addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        taskItem.querySelector('.delete-btn').addEventListener('click', () => {
            taskItem.remove();
        });

        // Append to task list
        taskList.appendChild(taskItem);

        // Clear input fields
        taskTitle.value = '';
        taskDesc.value = '';
    });
});
