/* 'use strict'; */

/*Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', 
после чего возвращает укороченную версию.
const formatString = function(string) {
  // твой код
};
Вызовы функции для проверки работоспособности твоей реализации.

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка*/

/* first option */
/* const formatString = function(string) {
  const characterArray = string.split("");
  const Array = [];
  if (characterArray.length > 41) {
    characterArray.splice(40);
    characterArray.push("...");
    return characterArray.join("");
  }
  return string;
}; */

/* second option */
const formatString = function(string) {
  const newString =
    string.length < 41 ? string : string.substring(0, 40) + "...";
  return newString;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
