const token = localStorage.getItem('token');
if (token) {
  fetch('/logout', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}
localStorage.removeItem('token');
window.location.href = '/login';
