function runProgram(input){
    input=input.split(/[\r\n]+/)
    var sum=0;
    var cont=Number(input[0])
    var val=input[1].split(" ").map(Number)
    for(var i=0;i<cont;i=i+2){
        sum=sum+val[i]
    }
    console.log(sum)
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