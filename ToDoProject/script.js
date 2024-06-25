document.addEventListener("DOMContentLoaded", function() {
    const addTaskBtn = document.getElementById("add-task-btn");
    const newTaskInput = document.getElementById("new-task");
    const taskList = document.getElementById("task-list");
    const allBtn = document.getElementById("all-btn");
    const doneBtn = document.getElementById("done-btn");
    const todoBtn = document.getElementById("todo-btn");
    const deleteDoneBtn = document.getElementById("delete-done-btn");
    const deleteAllBtn = document.getElementById("delete-all-btn");

    function createTaskElement(taskText) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = taskText;
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "toggle-done";
        const editBtn = document.createElement("button");
        editBtn.innerHTML = "&#9998;"; // Pencil icon
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "&#128465;"; // Trash icon

        const actions = document.createElement("div");
        actions.className = "actions";
        actions.appendChild(checkbox);
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actions);

        checkbox.addEventListener("change", function() {
            li.classList.toggle("done");
        });

        deleteBtn.addEventListener("click", function() {
            taskList.removeChild(li);
        });

        return li;
    }

    addTaskBtn.addEventListener("click", function() {
        if (newTaskInput.value.trim()) {
            const taskElement = createTaskElement(newTaskInput.value.trim());
            taskList.appendChild(taskElement);
            newTaskInput.value = "";
        }
    });

    allBtn.addEventListener("click", function() {
        Array.from(taskList.children).forEach(task => {
            task.style.display = "";
        });
    });

    doneBtn.addEventListener("click", function() {
        Array.from(taskList.children).forEach(task => {
            task.style.display = task.classList.contains("done") ? "" : "none";
        });
    });

    todoBtn.addEventListener("click", function() {
        Array.from(taskList.children).forEach(task => {
            task.style.display = !task.classList.contains("done") ? "" : "none";
        });
    });

    deleteDoneBtn.addEventListener("click", function() {
        Array.from(taskList.children).forEach(task => {
            if (task.classList.contains("done")) {
                taskList.removeChild(task);
            }
        });
    });

    deleteAllBtn.addEventListener("click", function() {
        taskList.innerHTML = "";
    });
});
