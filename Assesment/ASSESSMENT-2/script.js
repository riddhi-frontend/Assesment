// Get the form and input elements
const form = document.getElementById('add-todo-form');
const input = document.getElementById('todo-input');

// Get the todo list element
const list = document.getElementById('todo-list');

// Add an event listener to the form to handle the submission
form.addEventListener('submit', (e) =>
{
  // Prevent the default form submission behavior
    e.preventDefault();

  // Get the value of the input field
    const todoText = input.value.trim();

  // If the input is not empty, create a new list item and add it to the list
    if (todoText) {
    const newItem = document.createElement('li');
    newItem.textContent = todoText;
    list.appendChild(newItem);

    // Clear the input field
    input.value = '';
    }
}
);