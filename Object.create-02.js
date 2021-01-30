//Если передать null в качестве аргумента, будет создан объект без прототипа:

var emptyObject = Object.create ( null )
console.log (emptyObject)