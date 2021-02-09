function Creator (props){                               // создается функция конструктор
    props.forEach( prop =>                              // которая из массива аргументов
        Object.assign (this,prop)                       // наполнит объект свойствами
        
    )
}
Creator.prototype.setNewProp = function (newProp,val){  // в prototype конструктора Creator добавляется функция
    Object.assign(this,{[newProp]:val})                 // которая добавляет в объект новей свойства и значения из переданных ей параметров
}
var obj = Object.create(                                // создаем объект на основе прототипа
    new Creator([                                       // который создаем на основе конструктора Creator                                  
        {name: "google"},                               // передавая в качестве параметра массив объектов содержащих ключ и значение
        {type: "API"}
    ])
)

obj.setNewProp(                                         // создаем метод объекту
    "service",
    function(){
        console.log (this instanceof Creator)           // который проверяет причастность объекта obj к классу Creator
    }
)
for (let prop in obj){                                  // запускаем цикл который выведет в консоль все перечисляемые свойства 
    console.info (prop)                                 // прототипов
}