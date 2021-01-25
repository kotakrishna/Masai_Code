function runProgram(input){
    // Write code here
    var month=[("January"),("Febuary"),("March"),("April"),("May"),("June"),("July"),("August"),("September"),("October"),("Novermber"),("December")]
    var date=input.split("-")
    console.log(date[2]+" "+month[(Number(date[1])-1)]+ ", "+date[0])
    // console.log(input.length)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});