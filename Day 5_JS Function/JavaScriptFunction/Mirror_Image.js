var v="abcdefghijklmnopqrstuvwxyz"
var v_rev= "zyxwvutsrqponmlkjihgfedcba"

function Mirro_Image(char){
    for(var i=0;i<v.length;i++){
        if(char==v[i]){
            return v_rev[i]
        }
    }
}

var str="zebra"
var str1=""
for(var i=0;i<str.length;i++){
    str1=str1+Mirro_Image(str[i])
}
console.log(`${str}||${str1}`)