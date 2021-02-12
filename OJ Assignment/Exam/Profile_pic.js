function runProgram(input){
    input==input.split(/[\r\n]+/)
    var act=input[0].trim().split(" ").map(Number)
    var val=input[1].trim().split(" ").map(Number)
    if(act[0]<val[0] && act[1]<val[1]){
    console.log("Upload")
    }else if(act[0]>val[0]){
    console.log("Increase Length")
    }else if(act[1]>val[1]){
    console.log("Increase Width")
    }
    console.log(input)
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