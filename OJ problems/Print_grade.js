function runProgram(input){
    input=input.split(" ").map(Number)
   if(input==100){
       console.log("A");
   }else if(input<100 && input>89){
       console.log("B");
   
   }else if(input<90 && input>79){
       console.log("C");
   }else {
       console.log("F");
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