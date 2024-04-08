// contant.js

document.addEventListener("DOMContentLoaded", function () {

    var contactLink = document.querySelector(".menu-link");

    contactLink.addEventListener("click", function () {
        
      window.location.href = "your_new_page.html";
    });
  });

  function sendEmail() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
  
    var subject = "New Contact Form Submission";
    var body = "Name: " + name + "\nMessage: " + message;
  
    var recipientEmail = "lucesblancas.oficial@gmail.com";
    var mailtoLink = "mailto:" + encodeURIComponent(recipientEmail) +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
  
    window.location.href = mailtoLink;
  }

  
  