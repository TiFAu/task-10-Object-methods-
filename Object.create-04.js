//Создадим экземпляр объекта proto:

var proto = {
    figure: "circle",
    size: 100,
    clip: false,
    changeFigure: function ( newFigure ) {
        this.figure = newFigure
    }
}
//А теперь вызовем метод Object.create() для создания экземпляра obj:

var obj = Object.create ( proto )
//В консоли посмотрим на результат:
console.log (obj)
/*Все свойства и методы объекта proto, взятого в качестве прототипа, стали унаследованными свойствами и методами экземпляра obj

Теперь создадим простой конструктор:*/

var Creator = function ( id, val ) {
    this.id = id
    this.val = val
}
//и вызовем его как обычную функцию, передав контекст нашего экземпляра obj:

Creator.call ( obj,  "sample",  75 )
//Посмотрим результат в консоли:
console.log (obj)