
document.addEventListener("DOMContentLoaded" , () => {
    const cvModal = document.getElementById("cv-modal");
    const cvFrame = document.getElementById("cv-frame");
    const viewCV = document.getElementById("cv-view");
    const closeModal = document.querySelector(".close");

    viewCV.addEventListener("click", (e) => {
        e.preventDefault();
        cvFrame.src = "/Briefcase/cv/Jorge_CV.pdf";
        cvModal.style.display = "flex"
    });

    closeModal.addEventListener("click", (e) => {
        cvModal.style.display = "none";
        cvFrame.src = "";
    });

    window.addEventListener("click", (e) => {
        if(e.target === cvFrame){
            cvModal.style.display = "none";
            cvFrame.src = "";
        }
    });
});