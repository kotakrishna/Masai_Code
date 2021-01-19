var lower="abcdefghijklmnopqrstuvwxyz"
var Upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function LowerCase(char){
        for(var i=0;i<lower.length;i++){
            if(char==Upper[i]){
                return lower[i]
            }
        }return char
}

var str="MiXeD"
var str1=""
for(var  i=0;i<str.length;i++){
    str1=str1+LowerCase(str[i]);
}
console.log(str1)