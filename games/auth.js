const authenticated = localStorage.getItem('authenticated');
if (!authenticated) {
  window.location.href = '/premium/';
}
