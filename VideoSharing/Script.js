function toggleYou() {
  var youDiv = document.querySelector(".you");
  youDiv.classList.toggle("open");
}

var menuBar = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuBar.onclick = function () {
  sideBar.classList.toggle("sSidebar");
  container.classList.toggle("large-container");
};
