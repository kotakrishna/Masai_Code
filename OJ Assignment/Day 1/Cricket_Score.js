function runProgram(input){
    // Write code here
    var runs=input.split(" ");
    var sum=0;
    var values=[1,2,3,4,6]
    for(var i=0;i<runs.length;i++){
    	sum=sum+(Number(runs[i])*values[i])
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