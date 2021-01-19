function DiviBySeven(input){
    if(input%7==0){
        return true
    }
}
var num =15;
if(DiviBySeven(num)){
    console.log("divisible by Seven")
}else{
    console.log("Not divisible by Seven")
}
var avg,count=0, sum=0;
for(var i=1;i<=num;i++){
    if(DiviBySeven(i)){
        count++
        sum=sum+i;
    }
}
avg=sum/count;
console.log(avg)

// ------------------------------------------------

var str="WONDERFULL TO SEE YOU ALL";
var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower="abcdefghijklmnopqrstuvwxyz"
var str1="";
function to_lower(input){
    for(var i=0;i<upper.lenght;i++){
        if(input[i]==upper[i]){
            return lower[i]
        }
    }return input
}

for(var i=0;i<str.length;i++){
    str1=str1+to_lower(str[i])
}

console.log(str1)

// ----------------------------------------------------

var ary=[5,6,7,8,9,1,2,3,4,5,6,67]
var ary1=[]
var ary2=[]
function find_even(ary){
    for(var i=0;i<ary.length;i++){
        if(ary[i]%2!=0){
            ary1.push(ary[i])
        }
    }
    return ary1
}
console.log(find_even(ary))

// -------------------------------------------------------------

var array=[56,76,87,45,34,554,34,23,12,54,67,78,77,1,1,1,555,555,555]

function min(array1){
    var min=100000*10000000;
    for(var i=0;i<array1.length;i++){
        if(min>array1[i]){
            min=array1[i];
        }
    }return min
}
function Max(array1){
    var max=0;
    for(var i=0;i<array1.length;i++){
        if(max<array1[i]){
            max=array1[i];
        }
    }return max
}

function Count_It(array1,num){
    var count=0
    for(var i=0;i<array1.length;i++){
        if(num==array1[i]){
            count++
        }
    }return count
}


var min_val=min(array)
var max_val=Max(array)

var max_count= Count_It(array,max_val)
var min_count= Count_It(array,min_val)

console.log(`max value  is ${max_val} and max count ${max_count}`)

console.log(`min value  is ${min_val} and min count ${min_count}`)

// --------------------------------

var str="the great ccccccccccccccccc things to be done always seem impossible till its done"

var char="c"

function remove_Char(str,char){
    var str1="";
    for(var i=0;i<str.length;i++){
        if(char!=str[i]){
            str1=str1+str[i]
        }
    }return str1
}

console.log(remove_Char(str,char))