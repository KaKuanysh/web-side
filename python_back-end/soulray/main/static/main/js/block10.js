document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const toggleBtn = item.querySelector(".toggle-btn");

        if (!question || !answer || !toggleBtn) {
            console.error("One of the required elements is missing in a FAQ item.");
            return;
        }

        question.addEventListener("click", function() {
            if (item.classList.contains("open")) {
                answer.style.display = "none";
                toggleBtn.textContent = "+";
                item.classList.remove("open");
            } else {
                answer.style.display = "block";
                toggleBtn.textContent = "-";
                item.classList.add("open");
            }
        });
    });
});
