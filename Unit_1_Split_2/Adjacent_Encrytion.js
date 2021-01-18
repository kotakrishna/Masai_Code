function Encrytion(char){
    var ABC="abcdefghijklmnopqrstuvwxyz";
    for(var i=0;i<ABC.length;i++){
        if(char==ABC[i] && char!="z"){
            return ABC[i+1]
        }else if(char=="z"){
            return "a"
        }
    }
}




var str="zyfqwxaeiou"
var str_Out=""
 
for(var i=0;i<str.length;i++){
    var x=Encrytion(str[i])
    str_Out=str_Out +x
}


console.log(str_Out)