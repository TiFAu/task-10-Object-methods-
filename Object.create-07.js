//Объявляем конструктор класса Dishes:

function Dishes ( type ) {
    this.type = "Посуда"
    console.log ( "Конструктор Dishes создал экземпляр посуды: \n", this )
}
//Создаем свойства и методы прототипа:

Dishes.prototype.wash = function () {
    this.clean = true
    console.info ( 'Посуда вымыта' )
}
Dishes.prototype.use = function () {
    this.clean = false
    console.info ( 'Посуда использована, она грязная' )
}
//Создадим конструктор класса Cup:

function Cup ( color ) {
    this.type = "чашка"
    this.color = color || "синяя"
}
//Нужно сделать так, класс Cup был подклассом класса Dishes

//Используем прототип класса Dishes:

Cup.prototype = Object.create ( Dishes.prototype )
/*Для того, чтобы класс Cup унаследовал
собственные перечислимые свойства родительского класса Dishes,
вызовем конструктор класса Dishes
с передачей ему контекста Cup.prototype:*/

Dishes.call ( Cup.prototype )
//Создадим экземпляр класса Cup:

var redCup = new Cup ( "красная" )
redCup
console.log (redCup)
/*▼ Cup {type: "чашка", color: "красная", clean: true}
    clean: true
    color: "красная"
    type: "чашка"
  ▼ __proto__: Dishes
        type: "Посуда"
      ▼ __proto__:
          ► use: ƒ ()
          ► wash: ƒ ()
          ► constructor: ƒ Dishes( type )
          ► __proto__: Object
Итак, мы построили цепочку прототипов

Для проверки, что наш экземпляр redCup принадлежит одновременно классам Cup и Dishes, воспользуемся оператором instanceof:
*/
redCup instanceof Cup        // true
redCup instanceof Dishes     // true
redCup instanceof Object   // true 
//Теперь проверим, как работает наша "машинка"

//Мы уже создали экземпляр redCup

//Давайте используем чашку, а потом помоем ее

redCup.use ()
//выдаст в консоль сообщение: Посуда использована, она грязная

redCup.wash ()
//выдаст в консоль сообщение: Посуда вымыта