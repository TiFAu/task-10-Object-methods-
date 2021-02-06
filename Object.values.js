/*Метод  Object.values() возвращает массив значений перечисляемых свойств объект 
в том же порядке что и цикл for...in. Разница между циклом и методом в том, 
что цикл перечисляет свойства и из цепочки прототипов.

 Возвращает массив значений собственных перечислимых свойств экземпляра,
т.е. тех свойств, имена которых возвращает метод Object.keys() */

var obj = {
    name: "first",
    type: "circle",
    color: "red",
    radius: 100,
    center: [ 120, 120 ]
}

console.log ( Object.values( obj ) )
//(5) ["first", "circle", "red", 100, Array(2)]
console.log (Object.keys(obj))
//(5) ["name", "type", "color", "radius", "center"]


var obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Массив как объект
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// Массив как объект со случайным порядком ключей
// Когда мы используем нумерованные ключ, значения возвращаются в порядке возрастания
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo неперечисляемое свойство
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = "bar";
console.log(Object.values(my_obj)); // ['bar']

// Аргумент, не являющийся объектом, будет приведен к объекту
console.log(Object.values("foo")); // ['f', 'o', 'o']