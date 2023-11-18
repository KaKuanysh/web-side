document.addEventListener("DOMContentLoaded", function() {
    // Обработчик для кнопки в секции container5
    const btnContainer5 = document.querySelector(".container5 .btn.btn-warning");
    if (btnContainer5) {
        btnContainer5.addEventListener("click", function() {
            console.log("Button in container5 clicked!"); // Для отладки
            document.getElementById("formContainer").style.display = "block";
        });
    }

    // Обработчик для кнопки в секции features
    const btnFeatures = document.querySelector(".features .btn.btn-warning");
    if (btnFeatures) {
        btnFeatures.addEventListener("click", function() {
            console.log("Button in features clicked!"); // Для отладки
            document.getElementById("formContainer").style.display = "block";
        });
    }

    // При отправке формы
    const requestForm = document.getElementById("requestForm");
    if (requestForm) {
        requestForm.addEventListener("submit", function(event) {
            console.log("Form submitted!");
            event.preventDefault();
            document.getElementById("requestForm").style.display = "none";
            document.getElementById("thankYouMessage").style.display = "block";
        });
    }

    // При закрытии формы
    const closeFormBtn = document.getElementById("closeFormBtn");
    if (closeFormBtn) {
        closeFormBtn.addEventListener("click", function() {
            document.getElementById("formContainer").style.display = "none";
        });
    }
});
AOS.init({
  once: false, // анимация будет проигрываться каждый раз
});
