console.info ( 'obj = {\n' )
for ( var x of Object.entries( obj ) ) {
    console.info ( `     ${x[0]}:${x[1]}\n` )
}
console.info ( '}' )
/*Результат:
obj = {
      width:30%
      height:30%
      border:solid 1px red
      borderRadius:50%
      position:fixed
      top:10%
      left:10%
}
*/