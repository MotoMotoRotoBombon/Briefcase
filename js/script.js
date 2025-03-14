document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll(".skills-specifications button");
    const skills = document.querySelectorAll(".skill");

    filters.forEach(filter => {
        filter.addEventListener("click", (e) => {
            e.preventDefault();

            const category = filter.getAttribute("data-filter");

            skills.forEach(skill => {
                const categories = skill
                    .getAttribute("data-category")
                    .split(",")
                    .map(cat => cat.trim()); // Elimina espacios innecesarios

                if (category === "all" || categories.includes(category)) {
                    skill.style.display = "flex";
                } else {
                    skill.style.display = "none";
                }
            });

            // Resalta el botón seleccionado
            filters.forEach(f => f.classList.remove("active"));
            filter.classList.add("active");
        });
    });
});