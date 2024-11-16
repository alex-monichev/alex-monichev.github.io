// Dark/Light mode

const btn = document.getElementById("dark-toggle");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    setDarkMode();
} else {
    setLightMode();
}

btn.addEventListener("click", function () {
    setTheme();
})

btn2.addEventListener("click", function () {
    setTheme();
})

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

    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute("scr-dark")
    })
}

function setLightMode() {
    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "light");

    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute("scr-light")
    })
}
