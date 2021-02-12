function runProgram(input){
    input=input.split(" ").map(Number)
    if(input[0]>input[1]){
    console.log("Australia")
    }else if(input[0]==input[1]){
    console.log("Tie")
    }else{
    console.log("England")
    }
    //console.log(input)
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