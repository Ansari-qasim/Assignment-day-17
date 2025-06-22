function loginUser() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  const msg = document.getElementById('loginMsg');
  msg.textContent = '';
  msg.className = 'msg';

  const userData = localStorage.getItem(email);

  if (!userData) {
    msg.textContent = 'User not found.';
    msg.classList.add('error');
    return;
  }

  const user = JSON.parse(userData);

  if (user.password !== password) {
    msg.textContent = 'Incorrect password.';
    msg.classList.add('error');
    return;
  }

  // Save name in session and redirect
  sessionStorage.setItem("loggedInUser", user.name);
  window.location.href = 'welcome.html';
}
