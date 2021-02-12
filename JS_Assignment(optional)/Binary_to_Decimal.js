var Binary_num=1001001
var str= Binary_num.toString()
var k= Binary_num
var x=0;
var Decimal=0
for(i=0;i<str.length;i++){
    x=Binary_num/(10**((str.length-1)-i))
    if(x>=1){
    var y=Math.floor(x)
    var z=y*(10**((str.length-1)-i))
    Binary_num=Binary_num-z
    y=y*(2**((str.length-1)-i))
    Decimal=Decimal+Number(y);
    }
}
console.log(Decimal +" is the value of binary number "+k )