'use strict';

let balance = 10000;
let isRunning = true;
alert('Добро пожаловать!');
while (isRunning){
    let userPromt = prompt('Что вы хотите сделать? (показать баланс, снять средства, пополнить счёт, выйти)');
    switch (userPromt) {
        case 'показать баланс':
            alert(balance);
            break;
        default:
            alert('Ошибка')
            break;
    }
}