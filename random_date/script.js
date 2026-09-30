// Определяем функцию для поиска случайного буднего и выходного дняв следующем месяце
function findWeekdayAndWeekendNextMounth() {
    // Получаем текущую дату
    const now = new Date();
    // Вычисляем год текущей даты
    const year = now.getFullYear();
    // Получаем номер текущего месяца и прибавляем 1 для перехода к следующему месяцу
    const month = now.getMonth() + 1;
    // Устонавливаем дату на первый день следующего месяца
    const firstDayNextMonth = new Date(year, month, 1);
    // Определяем количество дней в следующем месяце, создавая дату с нулевым днем следующего месяца,
    // что автоматически приведет к последнему дню следующего месяца
    const daysInNextMonth = new Date(year, month + 1, 0).getDate();

    // Инициализируем переменные для буденго и выходного дня
    let weekday;
    let weekend;

    // Инициализируем флаги, которые будут показывать, найдены ли уже подходящий будний и выходной дни
    let foundWeekday = false;
    let foundWeekend = false;

    while (!foundWeekday || !foundWeekend) {
        // Генерируем случайный день в следующем месяце
        let randomDay = Math.floor(Math.random() * daysInNextMonth) + 1;
        // Создаем объект Date для этого случайного дня
        let date = new Date(year, month, randomDay);
        // Получаем день недели для этой даты (0 - воскресенье, 6 - суббота)
        let dayOfWeek = date.getDay();

        // Проверяем, является ли день этой даты (понедельник-пятница)
        if (!foundWeekday && dayOfWeek >= 1 && dayOfWeek <= 5) {
            weekday = date; // Сохраняем дату как будний день
            foundWeekday = true; // Устанавливаем флаг нахождения буднего дня
        }

        // Проверяем, является ли день выходным (суббота-воскресенье)
        if (!foundWeekend && (dayOfWeek === 0 || dayOfWeek === 6)) {
            weekend = date; // Сохраняем дату как выходной день
            foundWeekend = true; // Устанавливаем флаг нахождения выходного дня
        }
    }

    // Выводим результаты в консоль: даты найденых буднего и выходного дней
    console.log(`Будний день для отдыха в следующем месяце: ${weekday.toLocaleDateString()}`);
    console.log(`Выходной день для отдыха в следующем месяце: ${weekend.toLocaleDateString()}`);
}

// Вызываем функцию для поиска случайного буднего и выходного дня
findWeekdayAndWeekendNextMounth();