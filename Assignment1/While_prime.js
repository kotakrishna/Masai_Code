var num= 64
var i=1;
var count=0, x=1
while(i<=num){
    x=num%i;
    if(x==0){
        count++
    }
    i++
}
if(count<=2){
    console.log("prime Number  " + num)
}else{
    console.log("Not Prime" + num)
}