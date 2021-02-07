var lib = Object

var obj = {
    name: "sample",
    type: "figurt"
}

obj.create = new Date ().toLocaleString()

lib.getOwnPropertyNames(obj)
// ["name", "type", "create"]