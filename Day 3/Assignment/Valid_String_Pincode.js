var Pincode="500010";
var num_Pin= Number(Pincode);
console.log(typeof(num_Pin))
if ((num_Pin/100000>1) && (num_Pin/1000000<1)){
    console.log("VALID");
}else{
    console.log("INVALID");
}