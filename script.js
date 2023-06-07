const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value;
  const assigneeSelect = document.getElementById("assignee-select");
  const assignees = Array.from(assigneeSelect.selectedOptions).map(option => option.value);

  if (taskText.trim() !== "" && assignees.length > 0) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <span>${assignees.join(", ")}</span>
      <button class="delete-btn">Delete</button>
    `;

    // Add event listener to delete task button
    const deleteBtn = taskItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
      taskItem.remove();
    });

    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

// Add event listener to the "Add Task" button
addTaskBtn.addEventListener("click", addTask);

// Add event listener to the input field to add a task on pressing enter
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
