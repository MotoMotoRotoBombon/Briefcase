
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navlinks = document.querySelectorAll("nav a");

    navlinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if(targetSection){
                sections.forEach(section => section.classList.remove("fade-in-active"));
                void targetSection.offsetWidth;
                targetSection.classList.add("fade-in-active");
                targetSection.scrollIntoView({behavior: "smooth"});
            }
        });
    });
});
