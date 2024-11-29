const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".center-menu");
const navbar = document.querySelector(".left-side-menu");
const body = document.querySelector(".body");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarLinks.classList.toggle("active");
  var audio = document.getElementById("myAudio");
  audio.currentTime = 0; // Reset audio to start
  audio.play();
});

navbarLinks.addEventListener("click", () => {
  navbarToggle.classList.remove("active");
  navbarLinks.classList.remove("active");
});

navbar.addEventListener("click", () => {
  navbarToggle.classList.remove("active");
  navbarLinks.classList.remove("active");
});

body.addEventListener("click", () => {
  navbarToggle.classList.remove("active");
  navbarLinks.classList.remove("active");
});

var coll = document.getElementsByClassName("h3");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
