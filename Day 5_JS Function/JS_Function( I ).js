function if_divided_by_3 (input){
    if(input%3==0){
        console.log("divisible by 3 ")
    }else{
        console.log("not divisiblr by 3")
    }
}

var num=57;
if_divided_by_3(num);
// --------------------------------------------------------
console.log("------------------------------------------------")


function if_divided_by_3x (input){
    if(input%3==0){
        console.log(input)
    }
}

var num=57;
for(var i=1;i<=57;i++){
    if_divided_by_3x(i)
}

// --------------------------------------------------------
console.log("------------------------------------------------")


var lowerCase="abcdefghijklmnopqrstuvwxyz"
var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function Upper_case(char){
    for(var i=0;i< lowerCase.length;i++){
            if(char==lowerCase[i]){
                return upperCase[i]
            }
    }
    return char
}
var str="kota sai krishna reddy"
var out=""
var uc;
for(var i=0;i<str.length;i++){
    uc=Upper_case(str[i])
    out=out+uc
}
console.log(out)

// --------------------------------------------------------
console.log("------------------------------------------------")

function Prime_or_Not(input){
    var count=0;
    for(var i=1;i<=input;i++){
        if(input%i==0){
            count++
        }
    }if(count<=2){
        console.log("Prime number= "+input)
    }else{
        console.log("Not Prime number "+ input)
    }
}

var number1=15;
Prime_or_Not(number1)

// --------------------------------------------------------
console.log("------------------------------------------------")

function Max(ary1){
    var max=0;
    for(var i=0;i<ary1.length;i++){
        if(max<ary1[i]){
            max=ary1[i]
        }
    }
    return max
}



function Max_occurance(ary2){
     var value=Max(ary2)
     var z;
        var count=0;
        for(var i=0;i<ary2.length;i++){
            if(value==ary2[i]){
                z=ary2[i]
                count++
            }
        }
        return count
}
var ary=[50,59,595,8,8,834,834,,78,834]
var c,d;
d=Max(ary)
c=Max_occurance(ary);
console.log(c)
console.log(d)

// --------------------------------------------------------
console.log("------------------------------------------------")

var V=["a","e","i","o","u"];

function is_Vow(input){
    for(var i=0;i<V.length;i++){
        if(input==V[i]){
            return true;
        }
    }
    return false;
}

function Re_Vow(str){
var out =""
    for(var i=0;i<str.length;i++){
        if(! is_Vow(str[i])){
            out=out+str[i]
        }
    }return out
}

var str="Kota Sai Krishna Reddy"


console.log(Re_Vow(str))
