/* Метод Object.isSealed() определяет, является ли объект запечатанным.

Синтаксис
Object.isSealed(obj)
Параметры
obj
Проверяемый объект.
Описание
Возвращает true, если объект является запечатанным,
иначе возвращает false. Объект является запечатанным,
если он является не расширяемым и если все его свойства являются
не настраиваемыми и, следовательно, не удаляемыми 
(но не обязательно не записываемыми).
 */
// По умолчанию объекты не запечатаны.
var empty = {};
console.assert(Object.isSealed(empty) === false);

/* Если вы сделаете пустой объект не расширяемым,
 он по определению станет запечатанным. */
Object.preventExtensions(empty);
console.assert(Object.isSealed(empty) === true);

/* То же самое не верно для не пустого объекта, пока все его свойства
 не станут не настраиваемыми. */
var hasProp = { fee: 'fie foe fum' };
Object.preventExtensions(hasProp);
console.assert(Object.isSealed(hasProp) === false);

// Но сделав все его свойства не настраиваемыми, объект становится запечатанным.
Object.defineProperty(hasProp, 'fee', { configurable: false });
console.assert(Object.isSealed(hasProp) === true);

/* Простейшим способом запечатать объект, конечно,
 является использование метода Object.seal. */
var sealed = {};
Object.seal(sealed);
console.assert(Object.isSealed(sealed) === true);

// Запечатанный объект по определению является не расширяемым.
console.assert(Object.isExtensible(sealed) === false);

// Запечатанный объект может быть замороженным, но это не всегда так.
console.assert(Object.isFrozen(sealed) === true); 
// все свойства также являются не записываемыми

var s2 = Object.seal({ p: 3 });
console.assert(Object.isFrozen(s2) === false); 
// свойство 'p' всё ещё записываемое

var s3 = Object.seal({ get p() { return 0; } });
console.assert(Object.isFrozen(s3) === true); 
// для свойств доступа значение имеет только их настраиваемость
/* Примечания
В ES5, если аргумент метода не является объектом
 (является примитивным значением), будет выброшено исключение TypeError.
В ES6 такой аргумент будет рассматриваться, как простой запечатанный
  объект и метод просто вернёт true. 
*/

