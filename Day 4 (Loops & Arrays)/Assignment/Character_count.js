var char_str=["HTML","CSS","JAVA","JS","ANDROID"]
var x=0, count=0;
for(var i=0;i<=char_str.length;i++){
    for(var j=0;j<=i;j++){
        count++
    }
    x=x+count;
}
console.log(x)