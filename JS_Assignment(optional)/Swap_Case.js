var text="MiXeD"
var result=""

var char=""

for(i=0;i<text.length;i++){
    char=text[i]
    if(char==char.toUpperCase()){
        result=result+char.toLowerCase()
    }else{
        result=result+ char.toUpperCase()
    }
}
console.log(result)