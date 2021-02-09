var Creator = function (id, val){
    this.id = id || "###"
    this.val = val || null
}
Creator.prototype.setValue = function(newVal){
    this.val=newVal
}
var obj = Object.create(Creator.prototype)
for (var prop in obj) console.log(prop) //setValue
Object.keys(obj) //