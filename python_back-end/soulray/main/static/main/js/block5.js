document.addEventListener("DOMContentLoaded", function() {
    const btn5 = document.querySelector(".btn5");
    const requestForm = document.getElementById("newRequestForm");

    if (!btn5 || !requestForm) {
        console.error("Button or form not found!");
        return;
    }

    btn5.addEventListener("click", function() {
        if (requestForm.style.display === "none" || requestForm.style.display === "") {
            requestForm.style.display = "block";
            console.log("Form displayed!");
        } else {
            requestForm.style.display = "none";
            console.log("Form hidden!");
        }
    });
});
