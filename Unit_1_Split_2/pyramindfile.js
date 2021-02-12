var str=""
var str1=""
var dot="."
var str3=""
var str2=""
var oo="o"
var height=9
for(var i=0;i<height;i++){
    if(i!=4){
        str=str+dot
    }else{
        str=str+oo
    }
}
for(var i=0;i<height;i++){
    if(i==3 || i==5){
        str1=str1+oo
    }else{
        str1=str1+dot
    } 
}
for(var i=0;i<height;i++){
    if(i==2 ||i==4||i==6){
        str3=str3+oo
    }else{
        str3=str3+dot
    } 
}
for(var i=0;i<height;i++){
    if(i==1 || i==3||i==5||i==7){
        str2=str2+oo
    }else{
        str2=str2+dot
    } 
}

function pyramid(){


console.log(str)
console.log(str1)
console.log(str3)
console.log(str2)
}
function Inversepyramid(){
    console.log(str2)
    console.log(str3)
    console.log(str1)
    console.log(str)

}

function rhombus(){
    pyramid()
    Inversepyramid()
}
console.log("Example 1")
pyramid()
console.log
console.log("Example 2")
Inversepyramid()
console.log("example 3")
rhombus()

