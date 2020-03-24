let sale = "999";

if (sale < "1000") {
    console.log("Скидка не предусмотрена");
} else if (sale >= "1000" && sale < "2000") {
    sale = sale * 0.95;
    console.log(sale, "Скидка 5%");
} else if (sale >= "2000" && sale < "3000") {
    sale = sale * 0.9;
    console.log(sale, "Скидка 10%");
} else if (sale >= "3000") {
    sale = sale * 0.9;
    console.log(sale, "Скидка 10% + Подарок");
}

let month = 'Май';
switch (month) {
    case 'Декабрь':
    case 'Январь':
    case 'Февраль':
        console.log("Зима");
        break; 
    case 'Март':
    case 'Апрель':
    case 'Май':
        console.log("Весна");
        break;
    case 'Июнь':
    case 'Июль':
    case 'Август':
        console.log("Лето");
        break;
    case 'Сентябрь':
    case 'Октябрь':
    case 'Ноябрь':
        console.log("Осень");
        break;
    default: 
        console.log("Пиши нормально, 13 месяца пока еще никто не придумал");
}

let min = 1;
let max = 7;
let random = Math.random() * (+max - +min) + +min;
let num = 1;
if (num === random && num != 0) {
    console.log("Вы угадали");
} else if (num > random && num != 0) {
    console.log("Число меньше");
} else if (num < random && num != 0) {
    console.log("Число больше");
} else if (num === 0) {
    console.log("Выход");
}

let numbs = [1, 2, 3, 4, 5, 6, 7];
