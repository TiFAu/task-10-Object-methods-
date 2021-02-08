var people = [
    {
        name: "Тимофей",
        age: 25
    },
    {
        name: "Елена",
        age: 20
    }
]
var human = Object.assign (
    {},
    people[0],
    {age: people[1].age}
)