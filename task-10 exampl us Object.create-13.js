var proto = {}
Object.defineProperty (proto, "keys", {
    get(){
        return Object.keys (this)
    },
    set (prop){
        this [prop[0]]=prop[1]
    }
})
var obj = Object.create (proto)
obj.keys = ["type","API"]
console.log(obj.keys[0])