const form = document.getElementById('loginForm');
const errorMsg = document.getElementById('error-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = form.username.value.trim();
  // Dummy check: accept only "user@yahoo.com"
  if (username.toLowerCase() !== 'user@yahoo.com') {
    errorMsg.textContent = "Sorry, we don't recognize this email.";
  } else {
    errorMsg.textContent = '';
    // proceed to next step...
    alert('Username recognized. Proceeding...');
  }
});
