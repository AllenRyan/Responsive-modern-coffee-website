const menuOpen = document.getElementById("menu-open-button");
const menuClose = document.getElementById("menu-close-button")

 menuOpen.addEventListener("click",() => {
   document.body.classList.toggle("show-mobile-menu");
 })
menuClose.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
})