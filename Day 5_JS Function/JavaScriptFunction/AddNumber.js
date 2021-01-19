function adding_two(num1,num2){
    return num1 + num2
}

var v1=-8, v2=-4, v3=-21;
var x=adding_two(v1,v2)
var total=adding_two(x,v3)

console.log(`sum of ${v1},${v2},${v3} is ${total}`)