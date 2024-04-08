document.addEventListener("DOMContentLoaded", function () {
  const accountButton = document.querySelector(".header-account");

  accountButton.addEventListener("click", function () {
    window.location.href = "your_new_page.html";
  });

  var logoLink = document.querySelector(".logo");

  if (logoLink) {
    logoLink.addEventListener("click", function (event) {
      event.preventDefault(); 
      window.location.href = "index.html"; 
    });
  }
});




