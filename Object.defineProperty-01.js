/* Object.defineProperty()
Этот метод позволяет создать объекту свойство с дескриптором

Первый аргумент метода - ссылка на объект, которому добавляется свойство
Второй аргумент - имя свойства ( строка )
Третий аргумент - объект дескриптора свойства
:coffee: :one:

Добавим свойство type объекту sample и сделаем это свойство неперечислимым
*/
var sample = {
    name: "figure",
    size: 100,
    color: "red"
}
Object.defineProperty ( sample, 'type', {
    value: "svg",
    enumerable: false
})

Object.keys ( sample )
/*Результат:
► (3) ["name", "size", "color"]*/