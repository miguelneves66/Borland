const toggleBtn = document.getElementById("menu-toggle");Add commentMore actions
const navMenu = document.getElementById("nav-menu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
