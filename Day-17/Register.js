function registerUser() {
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;

  const msg = document.getElementById('regMsg');
  msg.textContent = '';
  msg.className = 'msg';

  if (!name || !email || !password) {
    msg.textContent = 'All fields are required.';
    msg.classList.add('error');
    return;
  }

  if (localStorage.getItem(email)) {
    msg.textContent = 'User already exists.';
    msg.classList.add('error');
    return;
  }

  const user = { name, email, password };
  localStorage.setItem(email, JSON.stringify(user));
  msg.textContent = 'Registration successful!';
  msg.classList.add('success');

  setTimeout(() => {
    location.href = 'login.html';
  }, 1000);
}
