//Создадим конструктор Human и воспользуемся методом Object.create() для создания нового экземпляра worker:

function Human ( name = "Тимофей", hobby = "футбол" ) {
    this.name = name,
    this.hobby = hobby
}

Human.prototype = {
    speciality: "монтажник",
    age: 20
}

var worker = Object.create (
    new Human ( "Иван", "рыбалка" )
)
//Выведем в консоль экземпляр worker:
console.log (worker)
//А теперь проверим, что worker является экземпляром Human

worker instanceof Human   // true
worker instanceof Object  // true