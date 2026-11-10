
// VoltarOS Website

document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Reveal sections when scrolling
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    document.querySelectorAll(
        ".product-card, .feature, .section-heading"
    ).forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });

    console.log("VoltarOS website initialized.");
    console.log("Built with vision. Powered by Voltar.");
});
