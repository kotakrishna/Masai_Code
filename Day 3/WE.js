var A=15 , B=20;
if(A>B){
    console.log("B is smaller");
}else{
    console.log("A is smaller")
}

// --------------------------------
var Main_Password="Hello"
var Passwordtry="hello"
var Passwordtry1="hellllo"
if(Main_Password!==Passwordtry){
    console.log("WRong Password")
}
if( Main_Password!==Passwordtry1){
    console.log("Wrong Password")
}


// -----------------------------

var odd=15;
((odd%2)==1)? console.log("Odd"): console.log("Even");


// ----------------------------------------
var BirthYear=1996;
var Present_age=2021-BirthYear;
if (Present_age<29 && Present_age>20){
    console.log("Twenties");
}

// ------------------------------------

var A=15, B=19 , C =26;
if(C>B && C>A){
    if(A<B){
        console.log("C>B>A")
    }else{
        console.log("C>A>B")
    }
}else if(A<B){
    if(A>C){
        console.log("B>A>C")
    }else{
        console.log("B>C>A")
    }
}else{
    if(B<C){
        console.log("A>C>B")
    }else{
        console.log("A>B>C")
    }
}

// ----------------------------------

var N1=15, N2= 20;
N1>N2? console.log("A Greater than B"): console.log("B is greater than A");

// ------------------------------------

var day="Tuesday";
switch (day) {
    case "Monday":
        console.log("Mon");
        break;
    case "Tuesday":
        console.log("Tue");
        break;
    case "Wednesday":
        console.log("Wed");
        break;
    case "Thursday":
        console.log("Thu");
        break;
    case "Friday":
        console.log("Fri");
        break;
    case "Saturday":
        console.log("Sat");
        break;
    case "Sunday":
        console.log("Sun");
        break;
    default:
        console.log("Wrong day");
        break;
}