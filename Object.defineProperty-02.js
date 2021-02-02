/* геттер и сеттер свойства
Вычисляемые свойства
:coffee: :two:

Добавим еще одно свойство объекту sample

Свойство operation будет с геттером и сеттером

:warning: Когда определяются атрибуты get() и set() в дескрипторе свойства,
 нельзя использовать атрибуты writable и value*/

 Object.defineProperty ( sample, "operation", {
    get: () => this.operation ?                     // в случаи существования значения свойства 
               this.operation.substr ( 0, 1 ) : "?",// вывести 
    set: newVal => this.operation = newVal + "***"
})
/*Результат:
▼ {name: "figure", size: 100, color: "red", type: "svg"}
    color: "red"
    name: "figure"
    size: 100
    operation: (...)
    type: "svg"
  ► get operation: () => {…}
  ► set operation: newVal => this.operation = newVal + "***"
  ► __proto__: Object*/