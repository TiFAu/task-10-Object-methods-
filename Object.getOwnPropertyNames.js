/* Возвращает имена собственных свойств объекта

Свойства объекта могут быть функциями ( методы ) */

var funcObject = {
    getName() {},
    setName() {}
}
var newObject = Object.assign (
    {},
    { name: "Егор", age: 25 },
    {  write: true, read: true  },
    funcObject
)
Object.getOwnPropertyNames ( newObject )
/* Результат:
(6) ["name", "age", "write", "read", "getName", "setName"] */