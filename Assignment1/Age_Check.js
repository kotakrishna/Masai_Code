var A_name= "A", B_name="B", C_name="C";
var a_Birth= 1984,b_Birth= 1987,c_Birth= 1981;
var a= [2021-a_Birth,  2021-b_Birth,  2021-c_Birth];
var min_age=100;

for(var i=0;i<3;i++){
    if(min_age> a[i]){
        min_age=a[i]
    }
}
switch (min_age) {
    case a[0]:
        console.log("A")
        break;
    case a[1]:
        console.log("B")
        break;
    case a[2]:
        console.log("C")
        break;

    default:
        console.log("none")
        break;
}