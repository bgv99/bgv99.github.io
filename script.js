const root = document.documentElement;
const toggleBtn = document.querySelector(".theme-toggle");

function updateButton(theme) {
  toggleBtn.textContent = theme === "dark" ? "C" : "O";
}

function toggleTheme() {
  const currentTheme = root.getAttribute("data-theme");

  if(currentTheme === "dark") {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    updateButton("light");
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    updateButton("dark");
  }
}

(function () {
  const savedTheme = localStorage.getItem("theme") || "light";

  if(savedTheme === "dark") {
    root.setAttribute("data-theme", "dark");
  }

  updateButton(savedTheme);
})();