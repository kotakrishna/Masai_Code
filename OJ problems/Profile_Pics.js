function runProgram(input){
    input=input.split(/[\r\n]+/)
    var L_and_W=input[0].trim().split(" ").map(Number)
    var vals=input[1].trim().split(" ").map(Number)
    if(L_and_W[0]>vals[0]){
        console.log("Increase Length");
    }else if(L_and_W[1]>vals[1]){
        console.log("Increase Width");
    }else{
        console.log("Upload");
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