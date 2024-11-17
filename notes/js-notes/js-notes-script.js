// Dark/Light mode

const btn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    setDarkMode();
} else {
    setLightMode();
}

btn.addEventListener("click", function () {
    setTheme();
});

function setTheme() {
    let currentTheme = document.body.getAttribute("theme");
    if (currentTheme === "dark") {
        setLightMode();
    } else {
        setDarkMode();
    }
}

function setDarkMode() {
    document.body.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");

    // Fix the typo
    btn.src = btn.getAttribute("src-dark");
}

function setLightMode() {
    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "light");

    // Fix the typo
    btn.src = btn.getAttribute("src-light");
}
