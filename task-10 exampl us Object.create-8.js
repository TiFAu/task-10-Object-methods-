function LibraryBook (library) {                                                // декларируем функцию конструктор
    this.library = library || "..."                                             // которая создает свойство у вызывающего её объекта
}                                                                               // из переданного параметра или "..." если ничего не пердано
LibraryBook.prototype.setLibrary = function(lib){                               // в prototype задаем метод  setLibrary
    this.__proto__.library = lib                                                // который передает полученный параметр в __proto__.library
}

function Book (author="Пугкин", title="Метель"){                      // декларируется функция конструктор с двумя параметрами (есть значения по умолчанию)
    this.author = author                                                        // свойсвам присваиваются соответствующие папараметры
    this.title = title
    function use (newReader){                                                   // метод регистрирующий нового читателя книги
        this.reader = newReader
        this.date = new Date().toLocaleString().split(", ")[0]                  // и даты регистрации взятой книги
    }
    function ret (){                                                            // метод удаляющий читателя при возращении книги
        delete this.reader
        delete this.date                                                        // и даты 
    }
    Object.defineProperty (this, "state", {                                     // добавляем в книгу настраиваемое свойство state
        get () {
            return !this.reader ? "В наличии" : `выдана читателю  ${this.date}`   // если свойство reader у книги отсутствует - выести что книга свободна
        },                                                                      // в противном случае выдать дату когда была выдана
        set (newReader) {                                                        // если новый читатель не задан  
            !newReader ? ret.call(this):                                        // вызвать метод удаления записи читателя и даты
                this.reader ?                                                   // в противном случаи проверить наличия записи читателя
                    console.warn (`Книга "${this.title}" на руках`) :           // если есть читать выести в консоль "название книги" на руках
                        use.call (this,newReader)                               // если читателя нет - вызвать метод добавления читателя и даты
        }
    })
}
Book.prototype = Object.create (LibraryBook.prototype)                          // в prototype функции конструктора помещается прототип 

LibraryBook.call (Book.prototype, "Библиотека им. Вернадского")                 //

var books =[]                                                                   // создаем массив книг
books[0] = new Book ()                                                          // первая книга по умолчания Book
books[1] = new Book ("Пушкин", "Борис Годунов")                                 // создаем вторую книгу
                                              
console.log (books[1].state)
//В наличии