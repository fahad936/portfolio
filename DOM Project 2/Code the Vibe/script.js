document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleTheme');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
  });
});
