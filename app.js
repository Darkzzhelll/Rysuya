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
