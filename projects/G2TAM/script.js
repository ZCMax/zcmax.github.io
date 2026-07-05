const navbar = document.querySelector(".navbar");

function syncNavbarState() {
    if (!navbar) return;
    navbar.classList.toggle("is-scrolled", window.scrollY > 12);
}

syncNavbarState();
window.addEventListener("scroll", syncNavbarState, { passive: true });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        const targetId = anchor.getAttribute("href");
        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 18;
        window.scrollTo({ top, behavior: "smooth" });
    });
});
