var course = 28

var thing = {
    name: "Утюг",
    mark: "Tefal",
    priceUSD: 20
}

Object.defineProperty ( thing, "priceUAH", {
    get: function () {
        return this.priceUSD * course
    },
    set: function ( newPriceUAH ) {
        this.priceUSD = newPriceUAH / course
    }
})

console.log ( thing.priceUAH )
//Результат:
560
/*Теперь выполним присваивание значения вычисляемому свойству 
( вызывая под капотом сеттер этого свойства ):
*/
thing.priceUAH = 450

console.log ( thing.priceUDS )
//Результат:
8.928571428571429
//Выведем в консоль дескриптор вычисляемого свойства priceUAH

console.log (
    Object.getOwnPropertyDescriptor ( thing, "priceUAH" )
)
/*Результат:
▼ {get: ƒ, set: ƒ, enumerable: true, configurable: true}
    configurable: true
    enumerable: true
  ► get: ƒ priceUAH()
  ► set: ƒ priceUAH( newPriceUAH )
  ► __proto__: Object*/
