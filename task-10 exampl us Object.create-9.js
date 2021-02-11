function Thing (type){                              // декларируется функция конструктор с одним форальным параметром
    this.type = type || "..."                       // если параметр не задан то свойство type = "..."
}

Thing.prototype.getOwner = function (){             // в прототипе функции конструктора декларируется метод
    return this.owner                               // возвращаюций свойство owner контекста
}

Thing.prototype.setOwner = function (newOwner){     // в прототипе функции конструктора декларируется метод
    this.owner = newOwner                           // присваивающий свойству owner контекста значение newOwner
}
function Bag (owner) {                              // декларируется функция конструктор с формальным параметром "владелец"                                                 
    var $content = []                               // декларируется массив содержимого сумки
    this.owner = owner || "window"                  // контексту перед
    Object.defineProperty (this, "content", {       // контексту добавляется настраиваемое свойство  "content"
        get(){
            return $content.length ?                // которое возвращает при наличии контента => контент в одну строчку 
                $content.toString() : "..."         // в противном случае ...
        },
        set (newThing){                             // полученный аргумент если он пердан добавляет в контент 
            newThing ?                              // или ничего не делает
                $content. push (newThing) : null
        }
    })
}

Bag.prototype = Object.create (Thing.prototype)     // добавляем в прототип сумки прототип вещт=и

Thing.call(Bag.prototype, "Сумочка")                // на основе сумки создаем сумочку

var handBag = new Bag ("Оля Грибова")               // ручная сумока Оли Грибовой
 
handBag.content = "Спички"                          // добавляем в сумочку Оли спички
handBag.content = "Помада"                          // добавляем помаду

console.log (handBag.content)                       // смотрим что в сумочке Спички, помада