const navBar = document.querySelector(".navbar");
const menuBtns = document.querySelectorAll(".menuIcon");
const overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});
overlay.addEventListener("click", () => {
  navBar.classList.remove("open");
});
