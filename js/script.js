// MENÚ
function toggleMenu() {
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector(".overlay").classList.toggle("active");
}
// MODAL
function openModal(texto) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-text").innerHTML = texto;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// CERRAR MODAL CON ESC
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeModal();
});

// ANIMACIÓN SCROLL (REVEAL)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".container, .card, form").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// EFECTO PARALLAX SUAVE
window.addEventListener("scroll", () => {
    document.querySelectorAll(".card img").forEach(img => {
        let speed = window.scrollY * 0.05;
        img.style.transform = `translateY(${speed}px) scale(1.1)`;
    });
});