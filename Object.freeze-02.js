/*:pushpin: удаление свойств объекта

:coffee: 5
*/
var provider = { name: "Google", service: "API" }

Object.freeze ( provider )

delete provider.service  // false

console.log ( provider ) // { name: "Google", service: "API" }