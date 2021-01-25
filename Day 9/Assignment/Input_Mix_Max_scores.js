function runProgram(input){
    // Write code here
    var x= input.split(" ")
    var min=Number(x[0])
    var max=Number(x[0])
    for(var i=0;i<x.length;i++){
        if(min>Number(x[i])){
            min=Number(x[i])
        }
        if(max<Number(x[i])){
            max=Number(x[i])
        }
    }
    console.log(max)
    console.log(min)
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