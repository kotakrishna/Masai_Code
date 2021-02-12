function runProgram(input){
    // Write code here
    input1=input.trim().split(/[\r\n]+/)
    var weeks=Number(input1[0])
    var x=input1[1];    
    var items=[];
    var sum=0;
    items=x.split(" ").map(Number);
    var price=[550,240,84,159,80,160,252]
    for(var j=0;j<7;j++){
    sum=sum+(price[j]*items[j]);
    }
    console.log(sum*weeks)
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