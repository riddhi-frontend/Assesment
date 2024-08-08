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

// Get the cookies library
const Cookies = require('js-cookie');

// Check if there are any stored to-do items in the cookies
const storedItems = Cookies.get('todo-items');

// If there are stored items, populate the list
if (storedItems) {
  const items = JSON.parse(storedItems);
  items.forEach(item => {
    const newItem = document.createElement('li');
    newItem.textContent = item;
    list.appendChild(newItem);
  });
}

// Add an event listener to the form to handle the submission
form.addEventListener('submit', (e) => {
//left over for cookies
    // Add the new item to the cookies
    const items = Cookies.get('todo-items') ? JSON.parse(Cookies.get('todo-items')) : [];
    items.push(todoText);
    Cookies.set('todo-items', JSON.stringify(items));
  }
);