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
        case 'снять средства':
            let balanceMinus =Number(prompt('Сколько вы хотите снять?'));
            if (balance>balanceMinus) {
                balance-=balanceMinus;
                alert(`Теперь ваш баланс:${balance}`);
            } else {
                alert('У вас недостаточно средств для снятия!');
            }
            break;
        case 'пополнить счёт':
            let balancePlus = Number(prompt('Сколько вы хотите положить на счёт?'));
            balance+=balancePlus;
            alert(`Теперь ваш баланс:${balance}`);
            break;
        case 'выйти':
            alert('До свидания!');
            isRunning = false;
            break;
        default:
            alert('Ошибка')
            break;
    }
}