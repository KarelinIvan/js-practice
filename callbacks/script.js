function uploadCompleted() {
    // Функция, имитирующая завершение загрузки файла
    console.log("Загрузка файла успешно завершена");

    // Имитация обработки файла
    console.log("Обработка файла...");
    setTimeout(() => {
        console.log("Файл обработан");

        // Имитация сохранения файла
        console.log("Сохранение файла...");
        setTimeout(() => {
            console.log("Файл успешно сохранен. Файл готов к использованию!");
        }, 1000); // Имитация задержки сохранения файла
    }, 2000); // Имитация задержки обработки файла
}

function startUpload(callback) {
    console.log("Начало загрузки файла...");

    let progress = 0;
    const intervalId = setInterval(() => {
        // ИМитация процесса загрузки
        const increment = Math.floor(Math.random() * 10) + 5; // Увеличиваем прогресс на случайное значение от 5 до 15
        progress = Math.min(100, progress + increment); // Ограничиваем прогресс не более 100%
        console.log(`Прогресс ${progress}%`);

        if (progress >= 100) {
            clearInterval(intervalId); // Останавливаем интерввал
            console.log("Загрузка файла завершена!");
            if (callback) {
                callback(); // Вызываем callback после завершения
            }
        }
    }, 2000); // Обновляем прогресс каждые 2 секунды
}

// Запуск функции с отдельной функцией обратного вызовва
startUpload(uploadCompleted);