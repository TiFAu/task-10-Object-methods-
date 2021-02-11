function Thing (type){                          // декларируется функция конструктор с одним форальным параметром
    this.type = type || "..."                   // если параметр не задан то свойство type = "..."
}

Thing.prototype.getOwner = function (){         // в прототипе функции конструктора декларируется метод
    return this.owner                           // возвращаюций свойство owner контекста
}

Thing.prototype.setOwner = function (newOwner){ // в прототипе функции конструктора декларируется метод
    this.owner = newOwner                       // присваивающий свойству owner контекста значение newOwner
}
function Bag (owner) {
    var $content = []
    this.owner = owner || "window"
    Object.defineProperty (this, "content", {
        get
    })
}