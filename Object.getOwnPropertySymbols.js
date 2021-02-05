/* Метод Object.getOwnPropertySymbols() возвращает массив всех символьных
 свойств, найденных непосредственно на переданном объекте. */

 var obj = {};
var a = Symbol('a');
var b = Symbol.for('b');
var c  = "пора"

obj[a] = 'localSymbol';
obj[b] = 'globalSymbol';
obj[c] = "пора";


var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(obj)
console.log(Object.keys(obj).length)
console.log(Object.keys(obj))
console.log(objectSymbols.length); // 2
console.log(objectSymbols);        // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]);     // Symbol(a)