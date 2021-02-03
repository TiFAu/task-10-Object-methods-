/*изменение существующих свойств объекта

:coffee: 6
*/
var provider = { name: "Google", service: "API" }

Object.freeze ( provider )

provider.name = "Mozilla"

console.log ( provider.name ) // Google