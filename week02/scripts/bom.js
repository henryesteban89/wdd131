// Grab references to DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add click event listener
button.addEventListener('click', function() {
  // Check if input is not blank
  if (input.value.trim() !== '') {
    // Create li and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Populate li with input value
    li.textContent = input.value;

    // Configure delete button
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // Append delete button to li
    li.appendChild(deleteButton);

    // Append li to list
    list.appendChild(li);

    // Clear input and refocus
    input.value = '';
    input.focus();

    // Delete functionality
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });
  } else {
    // Optional feedback for empty input
    alert('Please enter a chapter before adding.');
    input.focus();
  }
});

