
function toggleMenu() {
    document.getElementById("nav").classList.toggle("open");
}

// Reveal elements when they enter the screen
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
});
