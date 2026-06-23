const themeBtn = document.getElementById("themeBtn");

const themes = [
    "#4f7cff",
    "#ff4f4f",
    "#4fff8b",
    "#ffb84f",
    "#b44fff",
    "#00e0ff",
    "#ff00c8"
];

function applyTheme(color) {
    document.documentElement.style.setProperty("--theme", color);
    localStorage.setItem("theme", color);
}

themeBtn.onclick = () => {
    const newColor = themes[Math.floor(Math.random() * themes.length)];
    applyTheme(newColor);
};

const saved = localStorage.getItem("theme");
if (saved) applyTheme(saved);
