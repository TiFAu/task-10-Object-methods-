var sample = {
    name: "figure",
    type: null,
    size: null,
    color: "red",
    showThis: function (){
        Object.keys (sample)
            .forEach (
                x => console.log(x)
            )
            
    }
}
Object.defineProperty (sample, 'size', {
    value: 100,
    enumerable: false
})
Object.defineProperty (sample, 'type', {
    value: "svg",
    enumerable: false
})
sample.showThis()