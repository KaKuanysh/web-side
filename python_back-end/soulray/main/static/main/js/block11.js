document.addEventListener("DOMContentLoaded", function() {
    const newRequestFormContainer = document.getElementById("newRequestFormContainer");
    const closeNewFormBtn = document.getElementById("closeNewFormBtn");
    const newRequestForm = document.getElementById("newRequestForm");
    const newThankYouMessage = document.getElementById("newThankYouMessage");

    closeNewFormBtn.addEventListener("click", function() {
        newThankYouMessage.style.display = "none";
        newRequestForm.style.display = "block"; // Показываем форму снова при закрытии сообщения
    });

    newRequestForm.addEventListener("submit", function(e) {
        e.preventDefault();
        newRequestForm.style.display = "none";  // Скрываем форму

        newThankYouMessage.innerHTML = `
    <h1 style="font-size: 40px; font-weight: bold;">Остались вопросы?</h1>
    <p style="font-size: 35px;">Спасибо!</p>
    <p style="font-size: 35px;">Ваша заявка отправлена.</p>`;

        newThankYouMessage.style.display = "flex"; // Показываем благодарственное сообщение
        newThankYouMessage.style.alignItems = "flex-end"; // Выравнивание содержимого по нижнему краю
        closeNewFormBtn.style.display = "block";
    });
});
