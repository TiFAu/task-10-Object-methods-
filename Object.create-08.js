/*__proto__ vs Object.create()
Аналогичный результат можно получить значительно проще, используя свойство __proto__

Сейчас мы усложним задачу, удлинив цепочку прототипов еще одним классом - Kitchenware

Создадим конструктор класса Kitchenware:*/

var Kitchenware = function () {
    this.className = "Кухонная утварь"
    this.__proto__.constructor = Kitchenware
}
/*Теперь создадим конструктор класса Dishes,

и используем конструктор Kitchenware

для создания прототипа экземпляров класса Dishes:*/

var Dishes = function () {
    this.__proto__ = new Kitchenware ()
    this.__proto__.constructor = Dishes
    this.className = "Посуда"
}
/*Теперь создадим конструктор класса Cup,

и используем конструктор Dishes

для создания прототипа экземпляров класса Cup:*/

var Cup = function ( $color ) {
    this.__proto__ = new Dishes ()
    this.__proto__.constructor = Cup
    this.className = "Чашка"
    this.color = $color || "белая"
}
//Теперь создадим экземпляр yellowCup класса Cup и выведем его в консоль:

var yellowCup = new Cup (  "желтая" )
console.log ( '*** cup: ', yellowCup )
//А также выведем в консоль цепочку прототипов, используя метод Object.getPrototypeOf():

console.log (
    'yellowCup prototype: ',
    Object.getPrototypeOf ( yellowCup )
)
console.log (
    'yellowCup prototype of prototype: ', 
    Object.getPrototypeOf (
        Object.getPrototypeOf ( yellowCup )
    )
)

/*Обратите внимание, что ссылка на конструктор задана в явном виде:

this.__proto__.constructor = Dishes
Это необходимо потому, что после выполнения присваивания

this.__proto__ = new Kitchenware ()  
имя конструктора прототипа будет Kitchenware, а не Dishes

Из-за этого мы получили бы в консоли вот такую картинку:


Аналогично мы явно указываем ссылку на функцию-конструктор чашки

this.__proto__.constructor = Cup
Однако воспользуемся теперь оператором instanceof*/

yellowCup instanceof Kitchenware  // true
yellowCup instanceof Dishes       // false
yellowCup instanceof Cup          // false
yellowCup instanceof Object       // true
/*Как мы видим, хотя в консоли цепочка прототипов выглядит вполне прилично,
на самом деле произошла передача свойств вместо наследования*/

