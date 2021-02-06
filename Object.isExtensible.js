/* Метод Object.isExtensible() определяет, является 
ли объект расширяемым (то есть, можно ли к нему добавлять новые свойства). */

/* Синтаксис
Object.isExtensible(obj)
Параметры
obj
Проверяемый объект. */
// Новые объекты являются расширяемыми.
var empty = {};
console.assert(Object.isExtensible(empty) === true);

// ...но это может быть изменено.
Object.preventExtensions(empty);
console.assert(Object.isExtensible(empty) === false);

// Запечатанные объекты по определению не расширяемы.
var sealed = Object.seal({});
console.assert(Object.isExtensible(sealed) === false);

// Замороженные объекты также по определению не расширяемы.
var frozen = Object.freeze({});
console.assert(Object.isExtensible(frozen) === false);


/* Примечания
В ES5, если аргумент метода не является объектом (является примитивным значением), будет выброшено исключение TypeError. В ES6 такой аргумент будет рассматриваться, как простой не расширяемый объект и метод просто вернёт false.
 */
Object.isExtensible(1)
//TypeError: 1 is not an object // код ES5

Object.isExtensible(1)
//false                         // код ES6