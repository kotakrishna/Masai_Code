function runProgram(input){
    // Write code here
    var inputx=input.split(".")
    if(inputx.length==1){
        console.log("0")
    }else{
        console.log(inputx[1].length)
    }
    
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