//Movement Animation to happen
const card = document.querySelector(".card");
const wadah = document.querySelector(".wadah");
//Items
const foto = document.querySelector(".foto img");

//Moving Animation Event
wadah.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
wadah.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  foto.style.transform = "translateZ(200px)";
});
//Animate Out
wadah.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  foto.style.transform = "translateZ(0px)";
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTOp = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTOp < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
// To check the scroll position on page load
reveal();
