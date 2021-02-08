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
Object.assign(people[1],people[0])
/* people
(2) […]
​0: Object { name: "Тимофей", age: 25 }
​1: Object { name: "Тимофей", age: 25 }
​length: 2
​<prototype>: Array [] */

​