var obj = Object.create({
    keys: function(){
        return Object.keys (this)
    }
})
obj.name = "google"
obj.type = "service"
 console.log(obj.keys()[1]) //  type