/* Возможно добавить объекту сразу несколько свойств с дескрипторами

Создадим в разметке новый элемент svg

<body>
    <svg width="400" height="400" 
         style="border: 1px dotted;"/>
    </svg>
</body>
и добавим сразу два свойства объекту sample с помощью метода Object.defineProperties():
*/
// Запустить код из task-10 Object.defineProperty-01 и task-10 Object.defineProperty-02

Object.defineProperties ( sample, {
    canvas: {
        value: document.querySelector ( "svg" ),
        writable: false,
        configurable: false,
        enumerable: false
    },
    owner: {
        get: () => this.owner,
        set: newOwner => this.owner = newOwner
    }
})
sample