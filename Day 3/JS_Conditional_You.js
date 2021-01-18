// Given two numbers A and B print which is larger
var  A=15, B=20;
if(A>B){
    console.log("A is greater than B");
}else if(B>A){
    console.log("B is greater than A");
}else {
    console.log("A is Equal to B");
}

console.log("---------------------------------------------");
// ------------------------
// Given two passwords print "Wrong Password" if both the passwords doesn't match. "Valid Password" if both the passwords are same.

var Main_Password="Masai School";
var Password1="Masai School";
var Password2="Masai school";
if(Main_Password==Password1){
    console.log("Valid Password");
}else if(Main_Password==Password2){
    console.log("Valid Password");
}else{
    console.log("Wrong Password");
}

console.log("---------------------------------------------");
// ----------------------------------------------------
// Given a number if it is odd print "Odd Number" other wise print "Even Number"

var Num1=20;
if(Num1%2==0){
    console.log("Even Number");
}else{
    console.log("Odd Number");
}

console.log("---------------------------------------------");
// -------------------------------------------------------
// Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

var birth_year= 1996;
var Present_age= 2021-birth_year;
if(Present_age>=13 && Present_age<=19){
    console.log("Teenage");
}else if(Present_age>=20 && Present_age<=29){
    console.log("Twenties");
}else{
    console.log("the person is below 3 or above 29")
}

console.log("---------------------------------------------");
// ----------------------------------------------------------
// Given the age of three people A B C (all different) Print the names in descending order (First Line) ascending order (Second Line)

var A= 2500, B = 3000 , C = 400;
if(A>B && A> C){
    if(B>C){
        console.log("A>B>C")
        console.log("C<B<A")
    }else{
        console.log("A>C>B")
        console.log("B<C<A")
    }
}else if(B>C){
    if(C>A){
        console.log("B>C>A")
        console.log("A<C<B")
    }else{
        console.log("B>A>C")
        console.log("C<A<B")
    }
}else{
    if(A>B){
        console.log("C>A>B")
        console.log("B<A<C")
    }else{
        console.log("C>B>A")
        console.log("A<B<C")
    }
}
console.log("---------------------------------------------");
// -----------------------------------------------
// Given two numbers A and B print "Equal" if both are equal otherwise print "Different" (Use ternary operator)

var A=20,B=20;
A===B? console.log("Equal"):console.log("Different");


// --------------------------------------------------
// Given the month in long format like "January", "February" ... print in short format "Jan", "Feb"

var Month="December";
switch (Month) {
    case "January":
        console.log("Jan");
        break;
    case "February":
        console.log("Feb");
        break;
    case "March ":
            console.log("Mar");
            break;
    case "April":
            console.log("Apl");
            break;
    case "May":
        console.log("May");
        break;
    case "June":
        console.log("June");
        break;
    case "July":
        console.log("July");
        break;
    case "August":
        console.log("Aug");
        break;
    case "September":
        console.log("Sept");
        break;
    case "October":
        console.log("Oct");
        break;
    case "November":
        console.log("Nov");
        break;
    case "December":
        console.log("Dec");
        break;
    default:
        console.log("Wrong Month");
        break;
}
console.log("---------------------------------------------");