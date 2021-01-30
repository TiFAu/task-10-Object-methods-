/*Метод Object.create() позволяет задавать дескрипторы свойств объекта

( как это делает метод Object.defineProperty(), который добавляет свойство в объект )*/

function Figure ( figType ) {                           // декларация функции с аргументом figType
    this.type = figType                                 // значение аргумента присваивается совйству type
    console.log ( "Instance of Figure created" )        // в консоль выводится message
}   
Figure.prototype.className = "Figure"                   // совйству className  присваивается значение "Figure"
            
var circle = Object.create ( new Figure ( "circle" ), { // дкларируется переменная и инициализируется методом create
    x: {
        value: undefined, 
        writable: true, 
        configurable: false, 
        enumerable: false
    },
    y: {
        value: undefined, 
        writable: true, 
        configurable: false, 
        enumerable: false
    },
    radius: {
        value: undefined, 
        writable: true, 
        configurable: false, 
        enumerable: false
    }
})

circle instanceof Figure  // true
/*С помощью оператора instanceof строится логическое выражение,
 которое принимает значение true, если объект является экземпляром класса:
 [объект]  instanceof  [класс]*/