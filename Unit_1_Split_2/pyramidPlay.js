var height=4
 pyramid()

function pyramid(){
    var x=height
for(i=0;i<x;i++){
switch (i) {
    case 0:
        console.log("....o....")
        x++
        break;
    case 1:
        console.log("...o.o...")
        x++
        break;
    case 2:
        console.log("..o.o.o..")
        x++
        break;
    case 3:
        console.log(".o.o.o.o.")
        x++
        break;

    // default:
    //     console.log(" ")
    //     break;
}
}
}


console.log("                                                 ")
console.log("                                                 ")
console.log("                                                 ")
console.log("                                                 ")
console.log("                                                 ")

Inverse_pyramid()

function Inverse_pyramid(){
    var x=height
for(i=x;i>=0;i--){
switch (i) {
    case 0:
        console.log("....o....")
        x++
        break;
    case 1:
        console.log("...o.o...")
        x++
        break;
    case 2:
        console.log("..o.o.o..")
        x++
        break;
    case 3:
        console.log(".o.o.o.o.")
        x++
        break;

    // default:
    //     console.log(" ")
    //     break;
}
}
}
console.log("                       ")
console.log("                       ")
console.log("                       ")
console.log("                       ")
console.log("                       ")
console.log("                       ")



function  rhombus (){
var x=height
pyramid()
Inverse_pyramid()

}

rhombus()