var number= 6;
var value=number
var str=number.toString()

var ary=[]

var x=0;
for(i=0;i<str.length;i++){
    x=number/(10**((str.length-1)-i));
    if(x>=1){
        var y=Math.floor(x)
         y=y*(10**((str.length-1)-i))
        ary.push(y)
        number=number-y;
    }
}
console.log(ary) 
console.log( " for the number "+ value)