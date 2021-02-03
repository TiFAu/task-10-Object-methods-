//Нарисуем окружность
var obj = {
    width: "30%",
    height: "30%",
    border: "solid 1px red",
    borderRadius: "50%",
    position: "fixed",
    top: "10%",
    left: "10%"
}
var elem = document.body.appendChild ( // Передаем в тело документа детеныша
    document.createElement ( "div" )   // Который создается как тег div     
)
Object.entries( obj )                   // создаем массив массивов (ключ, значение) из объекта  obj
   .forEach ( prop => elem.style [ prop [0] ] = prop [1] ) // используюя итерирующий метод массивов передаем стилю с одноименным именем prop [0] ключа значение prop [1]