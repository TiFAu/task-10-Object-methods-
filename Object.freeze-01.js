/*Метод Object.freeze делает объект неиммутабельным, т.е. предотвращает:

:pushpin: добавление новых свойств к объекту

:coffee: 4
*/
var provider = { name: "Google" }

Object.freeze ( provider )

provider.addProp = function ( propName, propVal ) {
    this[ propName ] = propVal
}

console.log ( provider ) // { name: "Google" }