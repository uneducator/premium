const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });
  const result = await response.json();
  if (result.success) {
    localStorage.setItem('token', result.token);
    window.location.href = '/dashboard';
  } else {
    alert(result.message);
  }
});
