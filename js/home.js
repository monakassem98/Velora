let product = document.getElementById("product");
let dropDown = document.getElementById("drop-down");
let active = document.getElementsByClassName(".active");
let women = document.getElementById("women");
let men = document.getElementById("men")

product.onclick = function () {
  dropDown.style.display = "flex";
  product.classList.add("active");
  product.style.borderBottom = "1px solid var(--sec-color)";
};

women.onclick = function () {
  window.location = "women.html";
};

men.onclick = function () {
  window.location = "men.html";
};

