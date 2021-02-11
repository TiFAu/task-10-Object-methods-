// Какие собственные перечисляемые свойства будут у экземпляра obj?
var ClassCreator = function (){
    for (var key in arguments) {
        this [arguments[key]]=null
    }
}
var obj = Object.create(
    new ClassCreator("name","age","buisy")
)
obj.date = new Date()
obj.key //date
Object.keys(obj)