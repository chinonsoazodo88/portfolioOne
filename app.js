const toggleButton = document.getElementById('toggleButton');

// Check if dark mode is already set in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = '';
}

// Event listener for the button toggle
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Update button text and localStorage
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    toggleButton.textContent = '';
    localStorage.removeItem('darkMode');
  }
});