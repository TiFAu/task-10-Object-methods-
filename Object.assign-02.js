//Создадим объект source, свойство position которого будет массивом, а свойство attrs - объектом:

var source = {
    name: "sample",
    attrs: {
        type: "figure",
        color: "green",
        size: 200
    },
    position: [ 250, 250 ]
}
console.log (source)
//Создадим копию target объекта source с помощью метода Object.assign:

var target = Object.assign ( {}, source )
/*Покажем, что:

☝ свойство target.attrs содержит ссылку на объект source.attrs,

☝ а свойство target.position содержит ссылку на массив source.position

Для этого изменим значение элемента массива target.position:*/

target.position [0] = 100
//и значение свойства target.attrs.color:

target.attrs.color = "#fa0"
/*поскольку target.position - это всего лишь ссылка на массив source.position,

а target.attrs - ссылка на объект source.attrs,

соответствующее значение массива source.position

и значение свойства attrs.color объекта source изменились:*/
source
console.log (source)