/* 
function User ( name ) {
    var userName = name || "User"
    var postList = []
    Object.defineProperties ( this, {
        name: {
            get () {
                this.•••
            },
            set ( newName ) {
                •••
            }
        },
        posts: {
            get () {
                return JSON.parse (
                    JSON.stringify ( ••• )
                )
            },
            set ( postData ) {
                postData && postData.header && postData.text ?
                    postList.push ({
                        title: postData.header || "empty",
                        text: postData.text || "empty",
                    }) : null
            }
        }
    })
}
*/
function User ( name ) {
    var userName = name || "User"
    var postList = []
    Object.defineProperties ( this, {
        name: {
            get () {
                this.name
            },
            set ( newName ) {
                newName => this.name = newName
            }
        },
        posts: {
            get () {
                return JSON.parse (
                    JSON.stringify ( ••• )
                )
            },
            set ( postData ) {
                postData && postData.header && postData.text ?
                    postList.push ({
                        title: postData.header || "empty",
                        text: postData.text || "empty",
                    }) : null
            }
        }
    })
}