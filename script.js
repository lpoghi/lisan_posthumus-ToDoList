const ul = document.getElementById('task-list');

const getTasks = async () => {
    const tasks = await apiGetTasks();

    const listItems = tasks.map((task) => {
        const li = document.createElement('li');
        li.innerHTML = task.description;
        const button = document.createElement('button');
        button.value = task._id;
        button.className = "delete-btn"
        button.addEventListener("click", deleteTask);
        li.appendChild(button);
        // const checkbox = document.createElement('input');
        // checkbox.setAttribute("type", "checkbox");
        // checkbox.value = task._id;
        // checkbox.className = 'checkbox'
        // checkbox.addEventListener("click", taskDone)
        // li.appendChild(checkbox);
        console.log(task);
        return li;
    });

    listItems.forEach(task => {
        ul.appendChild(task);
    });
}

const removeTasksDOM = () => {
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    };
}

const refreshTasksDOM = () => {
    removeTasksDOM();
    getTasks();
}

const addTask = async () => {
    const input = document.getElementById("input-description");
    const description = input.value;
    if (description != "") {
        const task = {
            description: description,
            done: false
        };
        const taskResult = await apiAddTask(task);
        input.value = "";
        refreshTasksDOM();
    }
}

const deleteTask = async (event) => {
    const id = event.target.value;
    console.log("hello World", event.target);
    if (id != "") {
        await apiDeleteTask(id);
        refreshTasksDOM();
    }
}



const addTaskBtn = document.getElementById("add-task-btn");
addTaskBtn.addEventListener("click", addTask);

getTasks();

