/* Метод Object.preventExtensions() предотвращает добавление новых свойств к объекту
 (то есть, предотвращает расширение этого объекта в будущем).

 */

const object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, 'property1', {
    value: 42
  });
} catch (e) {
  console.log(e);
  // expected output: TypeError: Cannot define property property1, object is not extensible
}

/*Объект называется расширяемым, если к нему могут быть добавлены новые свойства. 
Object.preventExtensions() помечает объект как нерасширяемый, так что он никогда не будет 
иметь других свойств, кроме тех, что были у него на момент пометки его нерасширяемым. 
Обратите внимание, что, в общем случае, свойства нерасширяемого объекта всё ещё могут быть удалены. 
Попытка добавить новые свойства к нерасширяемому объекту потерпит неудачу, либо молча, 
либо с выбрасыванием исключения TypeError (как правило, но не обязательно, 
это происходит в строгом режиме).
Метод Object.preventExtensions() предотвращает добавление только собственных свойств. 
Свойства всё ещё могут быть добавлены в прототип объекта. Однако, вызов Object.preventExtensions() 
на объекте также предотвращает расширение его свойства __proto__ .

Если превратить расширяемый объект в нерасширяемый возможно, 
в ECMAScript 5 нет никакого способа сделать обратную операцию.
*/

// Object.preventExtensions возвращает объект, который нужно сделать нерасширяемым.
var obj = {};
var obj2 = Object.preventExtensions(obj);
console.assert(obj === obj2);

// Объекты по умолчанию являются расширяемыми.
var empty = {};
console.assert(Object.isExtensible(empty) === true);

// ...но это может быть изменено.
Object.preventExtensions(empty);
console.assert(Object.isExtensible(empty) === false);

// Object.defineProperty выбрасывает исключение при добавлении нового свойства в нерасширяемый объект.
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, 'new', { value: 8675309 }); // выбросит TypeError

// В строгом режиме, попытки добавить новые свойства к нерасширяемому объекту, будут выбрасывать исключение TypeError.
function fail() {
  'use strict';
  nonExtensible.newProperty = 'ОШИБКА'; // выбросит TypeError
}
fail();

// РАСШИРЕНИЕ (работает только в движках, поддерживающих свойство __proto__
// (которое является устаревшим. Используйте вместо него метод Object.getPrototypeOf)):
// нерасширяемые объекты неизменны.
var fixed = Object.preventExtensions({});
fixed.__proto__ = { oh: 'hai' }; // выбросит TypeError
/* Примечания
В ES5, если аргумент метода не является объектом (является примитивным значением),
 будет выброшено исключение TypeError. В ES6 такой аргумент будет рассматриваться 
 как простой нерасширяемый объект и метод его просто вернёт. */

Object.preventExtensions(1)
//TypeError: 1 is not an object // код ES5

Object.preventExtensions(1)
//1                             // код ES6