function LibraryBook (library) {                                                // декларируем функцию конструктор
    this.library = library || "..."
    this.state = (function(){
        var reader = null
        var date = null
        function ret(){
            reader = null
            date = null
            return "The book is available"
        }
        function getReader(){
            return reader ? reader : "The book is available"
        }
        function setReader(newReader){
            reader = newReader
            date = new Date().toLocaleString().split(", ")[0]
            return `The book is in use from ${date}`
        }
        return function (arg){
            return !arg ? ret () :
                arg === "info" ? getReader () :
                    reader ? `The book "${this.title}" is in use` :
                        setReader (arg)

        }
    })()                                             // которая создает свойство у вызывающего её объекта
}

function Book (author, title){
    this.author = author || "Charles Dickens"
    this.title = title || "David Copperfield"
}

Book.prototype = Object.create (LibraryBook.prototype)                          // в prototype функции конструктора помещается прототип 

LibraryBook.call (Book.prototype, "Библиотека им. Вернадского")                 //

var book = new Book ("O`Henry", "Last leaf")                                    // создаем  книгу
book.state("Поповиченко Иван")                                                  // выдаем книгу Поповиченко Ивану
book.state("info")                                                              //"Поповиченко Иван"                