var A= 25, B=30;
// if (A>B){
//     console.log("A is greater than B");
// }else{
//     console.log("B is greater than A");
// }

(A>B) ? console.log("A is greater then B"):
 console.log("B is greater then A");  

//  ----------------------------------------------------
// Password

var password1="hellothere223";
var password2="hellothere123";
var Main_password="hellothere223";

if (Main_password===password2) {
    console.log("incorrect password")
}else if(Main_password===password1){
    console.log("correct Password")
} else {
    console.log("incorrect Password")
}

// ------------------------------------------------
// Even Number

var Z="12", Y="13";
((Z%2)==0)? console.log(" Z is Even Number"):
 console.log("Z is odd") ;
((Y%2)==0)? console.log(" Y is Even Number"):
 console.log(" Y is odd") ;

// --------------------------------------------------------
// age between 13 and 19

var age1="19", agemin="13", agemax="19";
if(age1>=agemin && age1<=agemax){
    console.log("Teenage")
}else{
    console.log("not Teenage")
}

// -------------------------------------------------------------
// Name is ascending order by age

var A=100;
var B=150;
var C=20;

if(A > B && A > C){
    if(B > C){
        console.log("C < B< A");
    }else{
        console.log("B < C < A");
    }
}else if(B>C){
    if (A>C){
        console.log("C < A < B");
    }else{
        console.log("A < C < B");
    }
}else{
    if (B>A){
        console.log("A < B <C");
    }else{
        console.log(" B< A< C");
    }
}

// ------------------------------
// Switch statements

var day ="Tue";
switch (day){
    case "Mon":
        console.log("Monday");
        break;
    case "Tue":
        console.log("Tuesday");
        break;
    case "Wed":
        console.log("Wenseday");
        break;
    case "Thu":
        console.log("Thurday");
        break;
    default:
        console.log("Wrong Day");
}