// в теле документа <svg width="300" height="300"></svg>

var sample = {
    name: "canvas sample"
}

Object.defineProperties (sample, {
    canvas: {
        value: document.querySelector ("svg"),
        writable: false,
        configurable: false,
        enumerable: false
    },
    owner: {
        get: () => this.owner,
        set: newOwner => this.owner = newOwner
    }
})

sample.owner = function(){ // меняем с настраиваемого значения ключа owner на функцию
    console.log ("Hello")
}

sample.owner()