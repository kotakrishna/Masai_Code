function runProgram(input){
    //input=input.map(Number)
    var sum=0;
    for(var i=0;i<=Number(input);i++){
    	if(i%2==0){
    		sum=sum+i
    	}
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
