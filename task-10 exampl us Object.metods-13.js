var sample = {
    sayFigure: function (figure){
        console.log (figure)
    },
    size: 50
}
var test = {
    condition: function (val, test){
        return val > test
    },
    res: 5 > 3
}
var obj = Object.assign({},sample,test)
console.log(Object.keys(obj))