const themeBtn = document.getElementById("themeBtn");

function toggleMode() {
    document.body.classList.toggle("light");
    localStorage.setItem("mode", document.body.classList.contains("light") ? "light" : "dark");
}

themeBtn.onclick = toggleMode;

const savedMode = localStorage.getItem("mode");
if (savedMode === "light") document.body.classList.add("light");
