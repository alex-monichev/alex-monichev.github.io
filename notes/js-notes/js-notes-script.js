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

// Grab elements
const tocToggle = document.getElementById('toc-toggle');
const tocContainer = document.getElementById('table-of-contents');
const tocList = document.getElementById('toc-list');

// Toggle ToC visibility
tocToggle.addEventListener('click', () => {
    const isHidden = tocContainer.hasAttribute('hidden');
    if (isHidden) {
        tocContainer.removeAttribute('hidden');
        populateTableOfContents();
    } else {
        tocContainer.setAttribute('hidden', true);
    }
});

// Populate ToC dynamically
function populateTableOfContents() {
    if (tocList.innerHTML.trim()) return; // Avoid duplicating list

    // Find all headings (h1)
    const headings = document.querySelectorAll('h1');
    headings.forEach((heading) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = heading.textContent;
        a.href = `#${heading.id || createHeadingId(heading)}`;
        li.appendChild(a);
        tocList.appendChild(li);
    });
}

// Generate unique IDs for headings if missing
function createHeadingId(heading) {
    const id = heading.textContent
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    heading.id = id;
    return id;
}
