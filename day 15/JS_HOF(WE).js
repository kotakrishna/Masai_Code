var items=[1,2,3,4,5]

var square = function(i){
    return i*i
}

items.forEach(function(i){
    console.log("Square of " + i + " is " +i*i);
})
var output=items.map(square)

console.log(output)

// Problem 2
 
var pr2=[1,2,3,4];

var double=function(i){
    return i*2
}

var outputdouble=pr2.map(double)

console.log(outputdouble);

//Problem
var number=[1,2,3,4,5,6,7,8,9,11]

var odd= function(i){
    return i%2==1
}

var output2=number.filter(odd)

console.log(output2);

//Problem product

var pr3=[2,3,4]

var p= function(i,e){
    return i*e
}

var product= pr3.reduce(p)

// var product=pr3.reduce(function(ac,el){
//     return ac * el;
// },1)

console.log(product);

//problem sum of odd
var sum= function (el,i){
    return el+i
}
var sum_of_odd=number.filter(odd).reduce(sum)

console.log(sum_of_odd)

// sum of cubes

var pr4=[1,2,3,4,5,6]

var divisible_3= function(el){
        return el%3==0
}
var cube=function(i){
    return i**3;
}
var output4=pr4.filter(divisible_3).map(cube).reduce(sum);

console.log(output4);