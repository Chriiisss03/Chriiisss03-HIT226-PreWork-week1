const themeToggleButton = document.getElementById("themeToggle");

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});