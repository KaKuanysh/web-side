document.addEventListener("DOMContentLoaded", function() {
    // Инициализация AOS
    // Функция для расчета прибыли
    function calculateProfit() {
        console.log("Функция calculateProfit вызвана");

        // Получаем значения из ползунков
        const cupsPerDay = parseInt(document.getElementById("cupsValue").innerText);
        const cafesCount = parseInt(document.getElementById("cafesValue").innerText);
        const monthsCount = parseInt(document.getElementById("monthsValue").innerText);

        const daysPerMonth = 30; // среднее количество дней в месяце
        const profitPerCup = 55; // предположим, что прибыль с одного стаканчика составляет 55 сомов

        const totalProfit = cupsPerDay * profitPerCup * daysPerMonth * monthsCount * cafesCount;

        // Отображаем результат на странице
        document.getElementById("result").querySelector("span").innerText = totalProfit;
    }

    function updateCupsValue(value) {
        document.getElementById("cupsValue").innerText = value;
        calculateProfit(); // вызов функции calculateProfit
    }

    function updateCafesValue(value) {
        document.getElementById("cafesValue").innerText = value;
        calculateProfit(); // вызов функции calculateProfit
    }

    function updateMonthsValue(value) {
        document.getElementById("monthsValue").innerText = value;
        calculateProfit(); // вызов функции calculateProfit
    }

    // Добавляем обработчики событий для ползунков
    document.getElementById("cupsRange").addEventListener("input", function(event) {
        updateCupsValue(event.target.value);
    });

    document.getElementById("cafesRange").addEventListener("input", function(event) {
        updateCafesValue(event.target.value);
    });

    document.getElementById("monthsRange").addEventListener("input", function(event) {
        updateMonthsValue(event.target.value);
    });

    // Вызовите calculateProfit при загрузке страницы, чтобы получить начальное значение
    calculateProfit();
});
