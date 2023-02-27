const form = document.querySelector('form');
const passwordInput = document.getElementById('password');
const errorMessage = document.createElement('p');
errorMessage.classList.add('error-message');
errorMessage.textContent = 'Incorrect password. Please try again.';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const password = passwordInput.value;
  if (password === 'DCS_Uneducator') {
    localStorage.setItem('authenticated', true);
    window.location.href = '/home.html';
  } else {
    form.appendChild(errorMessage);
  }
});
