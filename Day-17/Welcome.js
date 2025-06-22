const name = sessionStorage.getItem("loggedInUser");

if (!name) {
  // No session, redirect to login
  window.location.href = 'login.html';
} else {
  document.getElementById("welcomeMsg").textContent = `Welcome, ${name}!`;
}

function logoutUser() {
  sessionStorage.clear();
  window.location.href = 'login.html';
}
