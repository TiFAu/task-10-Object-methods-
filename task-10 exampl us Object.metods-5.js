var User = function (params){
    var name = params.name
    Object.defineProperty (this, "name", {
        get (){
            return name
        },
        set (newName){
            name = newName
        }
    })
}

var user = new User ({name: " Иван "})

//Изменить user.name
/* variant 1
user.name = "Ирина" // Прямое присваивание

variant 2
user.name = "Антон" // через set что то же самое что и через прямое присваивание
*/
