const token = localStorage.getItem('token');
if (!token) {
  window.location.href = '/login';
}

(async () => {
  const response = await fetch('/dashboard', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const result = await response.json();
  if (result.success) {
    const username = result.username;
    document.getElementById('username').textContent = username;
  } else {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
})();

const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
});
