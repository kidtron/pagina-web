document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelectorAll(".nav-button");
    const sections = document.querySelectorAll(".section");

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetSection = button.getAttribute("data-section");

            sections.forEach(section => {
                section.classList.remove("active");
                if (section.id === targetSection) {
                    section.classList.add("active");
                }
            });
        });
    });
});