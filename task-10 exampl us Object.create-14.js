var obj = Object.create(
    (
        function(){
            return Object.defineProperty({}, "keys", {
                get(){
                    return Object.keys(this)
                },
                set (prop) {
                    this [prop[0]] = prop[1]
                }
            })
        }
    )()
)
obj.keys = ["service","google"]
console.log (obj.keys[0])