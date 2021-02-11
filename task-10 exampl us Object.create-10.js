function LibraryBook (library) {                                                // декларируем функцию конструктор
    this.library = library || "..."                                             // которая создает свойство у вызывающего её объекта
}                                                                               // из переданного параметра или "..." если ничего не пердано
LibraryBook.prototype = {                               // в prototype задаем метод  setLibrary
    changeLibrary: function (library){
        this.__proto__.library = library
    }                                                // который передает полученный параметр в __proto__.library
}

function Book (author="Лев Толстой", title="Война и мир"){                      // декларируется функция конструктор с двумя параметрами (есть значения по умолчанию)
    this.author = author                                                        // свойсвам присваиваются соответствующие папараметры
    this.title = title
    Object.defineProperty (this, "state", {                                     // добавляем в книгу настраиваемое свойство state
        get () {
            return !this.reader ? "is free" : `in use from  ${this.date}`   // если свойство reader у книги отсутствует - выести что книга свободна
        },                                                                      // в противном случае выдать дату когда была выдана
        set (newReader) {                                                        // если новый читатель не задан  
            if (this.reader && newReader) return  `${this.title} is in use`                                      // вызвать метод удаления записи читателя и даты
            if (newReader){ 
                this.reader = newReader
                this.date = new Date().toLocaleString().split(", ")[0]                                                   // в противном случаи проверить наличия записи читателя
            } else {
                delete this.reader
                delete this.date
            }                              // если читателя нет - вызвать метод добавления читателя и даты
        }
    })
}
Book.prototype = Object.create (LibraryBook.prototype)                          // в prototype функции конструктора помещается прототип 

LibraryBook.call (Book.prototype, "Библиотека им. Вернадского")                 //

var books =[]                                                                   // создаем массив книг
books[0] = new Book ()                                                          // первая книга по умолчания Book
books[1] = new Book ("O`Henry", "Last leaf")                                // создаем вторую книгу
books[0].library

// "Книга "Война и мир" на руках"
"Библиотека им. Вернадского"