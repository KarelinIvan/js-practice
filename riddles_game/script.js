let correctAnswer = 0;
let wrongAnswer = 0;

function riddles(question, answer) {
    let userAnswer =  prompt(question).toLowerCase();

    if (userAnswer === answer) {
        correctAnswer += 1;
        console.log(`Правильно, молодец!`);
    } else {
        wrongAnswer += 1;
        console.log(`Увы, ты ошибся`);
    }

    console.log(`Итого: правильных ответов ${correctAnswer}, не правильных ответов ${wrongAnswer}`);
}

riddles('Зимой и летом одним цветом?', 'елка');
riddles('Не лает, не кусает, а в дом не пускает', 'замок');
riddles('Сидит дед, во сто шуб одет, кто его раздевает, тот слезы проливает', 'лук');