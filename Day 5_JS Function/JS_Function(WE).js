var num=10;

function num_div_five(input){
    if(input%5==0){
        return true
    }else{
        return false
    }
}

if(num_div_five(num)){
    console.log("Divisible by five")
}else{
     console.log("Not divisible  by Five")
}
var sum=0
for(var i=1;i<=num;i++)
    if(num_div_five(i)){
        sum=sum+i
    }
console.log(sum)

// ----------------------------------------------------------

var lower="abcdefghijklmnopqrstuvwxyz"
var Upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function toLower(char){
    var r="";
    for(var i=0;i<Upper.length;i++){
        if(char == Upper[i]){
            r=lower[i]
            return r
        }
    }
    return char
}
var char="TEA IS THE BEST"
// console.log(toLower(char))
var str=""
var x=""
for(var i=0;i<char.length;i++){
    x=toLower(char[i])
    str=str+x
}

console.log(str)


// ----------------------------------------------------------

// for not Prime
function NotPrime(input){
    var count=0;
    for(var i=1;i<=input;i++){
        if(input%i==0){
            count++
        }
    }
     var r=count<=2 ? false : true  
    return r 

}
var num = 13
var x=NotPrime(num)
if(x){
    console.log("not Prime")
}

// ----------------------------------------------------------


var ary=[43, 54 , 8 , 9, 8 , 7 , 7,7,7,7, 8 ,95, 100]

function min(input){
    var min=100000**1000000;
    for(var i=0;i<input.length;i++){
        if(min>input[i]){
            min=input[i]
        }
    }return min
}

function Count_min(input){
    var count=0;
    var  min1 = min(input);
    for(i=0;i<input.length;i++){
        if(min1==input[i]){
            count++
        }
    }return count;
}

var count= Count_min(ary)

console.log(count)

// ----------------------------------------------------------

var str="kotasaikrishnareddy"
var V=["a","i","e","o","u"]

function consonant(char){
    for(var i=0;i<V.length;i++){
        if(char==V[i]){
            return true
        }
    }
}

function reMove_Con(str){
    var str1=""
    for(var i=0;i<str.length;i++){
        if(! consonant(str[i])){
            str1=str1+str[i]
        }
    }return str1
}




console.log(reMove_Con(str))