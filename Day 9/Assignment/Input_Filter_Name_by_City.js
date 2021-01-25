function runProgram(input){
    // Write code here
   var x=input.split(/[\r\n]+/)
   for(var i=1;i<x.length;i++){
       var y=x[i].split(" ")
       if(x[0]==y[1]){
           console.log(y[0])
       }
   }
    // console.log(input)
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