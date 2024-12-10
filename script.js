const correctUsername = "admin";
const correctPassword = "12345";
const loginForm = document.getElementById("login-form");
const loginScreen = document.querySelector(".container"); // Tela de login (classe usada em index.html)

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === correctUsername && password === correctPassword) {
    // Redireciona para a tela do menu (menu.html)
    window.location.href = "menu.html";
  } else {
    alert("Usuário ou senha incorretos!");
  }
});
