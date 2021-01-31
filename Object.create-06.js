//Объявим конструктор класса SuperClass

function SuperClass () {
    this.__proto__.type = "SuperClass"
    this.__proto__.name = "Родительский класс"
}
//Теперь используем метод Object.create() для создания подкласса SubClass класса SuperClass

//Для этого объявим конструктор подкласса SubClass:

function SubClass () {
     SuperClass.call ( this )
     this.name = "Дочерний класс"
     this.type = "SubClass"
}

/*Конструктор SuperClass вызывается  в конструкторе SubClass 
как обычная функция, однако в контексте экземпляра ( sample )*/
var sample = new SubClass()
sample
//console.log (sample)//Результат в консоли:

//Обратите внимание, что SuperClass передал унаследованные свойства экземпляру, но при этом сам не появился в цепочке наследования:

sample instanceof SubClass    // true
sample instanceof SuperClass  // false
sample instanceof Object      // true
//В данном примере SuperClass выполняет функцию декоратора