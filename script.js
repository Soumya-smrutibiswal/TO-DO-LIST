function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please write a task!");
        return;
    }

    const taskList = document.getElementById("task-list");

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.onclick = () => {
        li.classList.toggle("completed");
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
        taskList.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
// Load tasks on page load
window.onload = function () {
    loadTasks();
};

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please write a task!");
        return;
    }

    const tasks = getTasks();
    tasks.push({ text: taskText, completed: false });
    saveTasks(tasks);

    taskInput.value = "";
    loadTasks(); // Refresh UI
}

function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    loadTasks();
}

function toggleTask(index) {
    const tasks = getTasks();
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    loadTasks();
}

// Helper: Get tasks from localStorage
function getTasks() {
    const stored = localStorage.getItem("todo-tasks");
    return stored ? JSON.parse(stored) : [];
}

// Helper: Save tasks to localStorage
function saveTasks(tasks) {
    localStorage.setItem("todo-tasks", JSON.stringify(tasks));
}

// Helper: Render tasks to UI
function loadTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; // Clear old list

    const tasks = getTasks();

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        if (task.completed) li.classList.add("completed");

        const span = document.createElement("span");
        span.textContent = task.text;
        span.onclick = () => toggleTask(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

window.onload = function () {
    loadTasks();
    document.getElementById("task-input").focus();

    // Press "Enter" to add task
    document.getElementById("task-input").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
};
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please write a task!");
        return;
    }

    const tasks = getTasks();
    if (tasks.length >= 10) {
        alert("You can only add up to 10 tasks.");
        return;
    }

    tasks.push({ text: taskText, completed: false });
    saveTasks(tasks);

    taskInput.value = "";
    loadTasks();
}

