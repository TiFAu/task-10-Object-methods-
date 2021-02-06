/* Метод Object.getPrototypeOf() возвращает прототип
 (то есть, внутреннее свойство [[Prototype]]) указанного объекта. */

 var proto = {};
 var obj = Object.create(proto);
 Object.getPrototypeOf(obj) === proto; // true
 let tt = Object.getPrototypeOf(obj)
 
 /* В ES5, если параметр obj не является объектом, будет выброшено исключение TypeError.
 В ES6, параметр будет приведён к объекту Object. */
 
 Object.getPrototypeOf('foo')
 //TypeError: "foo" is not an object  // код ES5
 Object.getPrototypeOf('foo')
 //String.prototype                   // код ES6
 
 proto.vat = "stringges"
 proto.aa = [1,3,6]
 Object.getPrototypeOf(tt)
 