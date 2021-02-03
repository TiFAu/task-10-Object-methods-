/*изменение дескрипторов свойств объекта ( значений enumerable, configurable и writable )

:coffee: 7

Изменим дескриптор свойства объекта до "заморозки":
*/
var provider = { name: "Google", service: "API" }

Object.defineProperty ( provider, "name", {
    enumerable: false,
    writable: false
} )

for ( var prop in provider )
    console.log ( `${prop}: ${provider [ prop ]}` )

// service: API
/*Как видите, свойство name стало неперечислимым

Проверим, изменяемо ли оно:
*/
provider.name = "Mozilla"

console.log ( provider.name ) // "Google"
//Теперь опять изменим дескриптор свойства name и изменим его значение:

Object.defineProperty ( provider, "name", {
    enumerable: true,
    writable: true
} )

provider.name = "Mozilla"
//Выведем все перечислимые свойства объекта:

for ( var prop in provider )
    console.log ( `${prop}: ${provider [ prop ]}` )

// name: Mozilla
// service: API
/*Т.е. мы опять сделали свойство name перечислимым

А теперь "заморозим" объект и попробуем переконфигурировать свойство service
*/
Object.freeze ( provider )

Object.defineProperty ( provider, "service", {
    enumerable: false,
    writable: false
} )
/*:no_entry: Будет сгенерировано исключение:

Uncaught TypeError: Cannot redefine property: service
Однако изменить значение свойства service мы не сможем, хотя нам и не удалось изменить дескриптор этого свойства

Почему? Заглянем теперь в дескриптор:
*/
Object.getOwnPropertyDescriptor ( provider, "service" )
/*
// { value: "API", writable: false, enumerable: true, configurable: false }
Т.е. в результате "заморозки" объекта дескрипторы его свойств были автоматически изменены: свойства стали неизменяемы и не конфигурируемы

Единственное, что "не зацепила" заморозка объекта - это атрибут enumerable

Если мы сами не установим его значение в false перед заморозкой, то свойства будут перечислимыми
*/
