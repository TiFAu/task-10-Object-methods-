/*Object.getOwnPropertyDescriptor()
Этот метод позволяет получить дескриптор собственного свойства объекта

Возвращает объект дескриптора свойства

Первым аргументом метода является объект

второй аргумент - имя свойства объекта

:mortar_board: Атрибуты свойств
Для каждого свойства объекта существует дескриптор свойства

Дескриптор свойства - это объект, который содержит атрибуты свойства:

✋ value
значение свойства
( по умолчанию undefined )

✋ writable
( true | false ) можно ли изменять значение свойства ( по умолчанию true )

✋ set
сеттер свойства
( функция, которая вызывается при записи значения свойства )
( по умолчанию имеет значение undefined )

✋ get
геттер свойства
( функция, которая вызывается при чтении значения свойства )
( по умолчанию имеет значение undefined )

✋ enumerable ( true | false )
является свойство перечислимым, или нет
т.е. будет ли оно итерироваться оператором for..in
и возвращаться при вызове метода Object.keys()
( по умолчанию имеет значение false )

✋ configurable ( true | false )
доступно ли свойство для модификации ( удаления, изменения атрибутов свойства )
можно ли конфигурировать свойство с помощью метода defineProperty
( по умолчанию false )

:coffee:
*/
var newObject = {
    name: "Егор",
    age: 25,
    write: true,
    read: true,
    getName() {},
    setName() {}
}
Object.getOwnPropertyDescriptor ( newObject, "getName" )
/*Результат:
▼ {value: ƒ, writable: true, enumerable: true, configurable: true}
    configurable: true
    enumerable: true
  ► value: ƒ getName()
    writable: true
  ► __proto__: Object
*/
var tt = Object.entries( Object.getOwnPropertyDescriptor ( newObject, "age" ))