'use strict'

// ? Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// ? від 200 до 300 - знижка буде 3%;
// ? від 300 до 500 - 5%;
// ? від 500 і вище - 7%.

let start = true;

while (start) {
    let userSum = prompt('Введи суму покупки', '');

    if (userSum === null) {
        start = false;
    } else if (userSum.trim().length === 0 || +userSum !== +userSum) {
        alert('Введи дані в форматі число');
    } else if (userSum < 200) { 
        alert('Введи суму не менше 200');
    } else {
        if (userSum >= 200 && userSum <= 300) {
            alert('Сума знижки 3% \n' + userSum * 0.97);
            start = false;
        } else if (userSum >= 300 && userSum <=500) {
            alert('Сума знижки  5% \n' + userSum * 0.95)
            start = false;
        } else if (userSum > 500) {
            alert('Сума знижки 4% \n' + userSum * 0.97)
            start = false;
        }
    }
}