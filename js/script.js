let btnToggle = document.getElementById("btnToggle");
let nav = document.getElementById("navigation");


window.addEventListener('resize', () => {

  let body = document.querySelector("body");
  let client = body.getBoundingClientRect();
  let width = parseInt(client.width);
  let btnToggle = document.getElementById("btnToggle");

  if(width >= 970 && nav.classList.contains("btn__menu--show")) 
    nav.classList.remove("btn__menu--show")

});

btnToggle.addEventListener("click", () => nav.classList.toggle("btn__menu--show"));

document.addEventListener("click", (event)=> {

  if(event.target != btnToggle) nav.classList.remove("btn__menu--show")

})

