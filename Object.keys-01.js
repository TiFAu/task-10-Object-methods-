var Human = function () {
    this.name = arguments [ 0 ] || "Тимофей"
    this.age = arguments [ 1 ] || 25
    this.speciality = arguments [ 2 ] || "слесарь"
}

Human.prototype.setSpeciality = function ( spec ) {
    this.speciality = spec
}

var man = new Human ( null )
// Добавим в прототип Human новое свойство employed:

Human.prototype.employed = false
console.log ( man.employed )  // false

//выведем в консоль собственные перечислимые свойства экземпляра man
console.log ( Object.keys ( man ) )
/*Результат:
(3) [ "name", "age", "speciality" ]
*/
// выведем перечислимые свойства прототипа:

console.log ( Object.keys ( Human.prototype ) )
/*Результат:
(2) [ "setSpeciality", "employed" ]*/
//Выполним присваивание:

man.employed = true
console.log ( Object.keys ( man ) )
/*Результат:
(4) [ "name", "age", "speciality", "employed" ]
у экземпляра man появилось собственное свойство employed,
 но у прототипа и экземпляра это совершенно различные свойства:
*/
console.log ( man.employed )           // true
console.log ( man.__proto__.employed ) // false
