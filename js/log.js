let user = document.getElementById("user");
let userAction = document.getElementById("user-actions");
let prof = document.getElementById("profile");
let signUp = document.getElementById("sign-up");
let signUpMenu = document.querySelector(".main");
let loginMenu = document.querySelector(".log-main");
let login = document.getElementById("login");
let logBtn = document.getElementById("log-btn");


prof.onclick = function () {
  window.location = "profile.html";
};

user.onclick = function () {
  userAction.style.display = "flex";
  user.style.color = "#f9c3bb"
};

signUp.onclick = function () {
  signUpMenu.style.transform = "translate(50%, 30%)";
};

login.onclick = function () {
  loginMenu.style.transform = "translate(50%, 30%)";
};

logBtn.onclick = function () {
  loginMenu.style.transform = "translate(50%, 30%)";
};