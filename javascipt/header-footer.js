function includeHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", function() {
  includeHTML("header-placeholder", "header.html");
  includeHTML("nav-placeholder", "nav.html");
  includeHTML("footer-placeholder", "footer.html");
});