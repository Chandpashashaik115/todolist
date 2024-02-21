document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addTask();
    });

    taskList.addEventListener('change', function (e) {
        if (e.target.tagName === 'INPUT') {
            toggleTaskStatus(e.target);
        }
    });

    taskList.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete')) {
            deleteTask(e.target.parentElement);
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }

    function toggleTaskStatus(checkbox) {
        const taskText = checkbox.nextElementSibling;
        taskText.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    }

    function deleteTask(taskItem) {
        taskItem.remove();
    }
});
