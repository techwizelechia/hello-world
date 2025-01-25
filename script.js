// Select the input field, button, and list container
const todoInput = document.getElementById("todo-input"); 
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Function to add a new task
function addTask() {
  // Get the input value and trim whitespace
  const taskText = todoInput.value.trim();

  // Check if the input is empty
  if (taskText === "") {
    alert("Please add a task!");
    return;
  }

  // Create a new list item
  const listItem = document.createElement("li");

  // Add the task text to the list item
  listItem.textContent = taskText;

  // Create a delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // Add an event listener to the delete button
  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  // Append the delete button to the list item
  listItem.appendChild(deleteButton);

  // Add the list item to the to-do list
  todoList.appendChild(listItem);

  // Clear the input field
  todoInput.value = "";
}

// Add an event listener to the "Add" button
addButton.addEventListener("click", addTask);

// Add an event listener to handle pressing Enter in the input field
todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
