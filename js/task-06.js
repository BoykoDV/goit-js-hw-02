/* 'use strict'; */

/* Напиши скрипт со следующим функционалом:

При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
Послетого ка к пользователь прекратил ввод нажав Cancel, если массив не пустой, 
необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. 
После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. 
Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', 
при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
 */

/* first option */
/* let input;
let total = 0;
const numbers = [];

while (true) {
  let input = prompt("Введи число");
  console.log(numbers);
  if (Number.isNaN(input)) {
    alert(`Было введено не число, попробуйте еще раз`);
    continue;
  }

  if (input === null) {
    alert(`Отменено пользователем!`);
    break;
  }
  numbers.push(input);
  total += Number(input);
}
alert(`Общая сумма ${total}`); */

/* second option */
let input;
let total = 0;
const numbers = [];

while (true) {
  let input = prompt("Введи число");
  console.log(numbers);
      if (input !== null) { numbers.push(input);}
      else { break;}
}

if (numbers.length !== 0) {
  for (const number of numbers) {
    total += Number(number);
  }
  alert(`Общая сумма ${total}`);
  }
else {
    alert(`Не ввели ни одного числа!`);
  }
