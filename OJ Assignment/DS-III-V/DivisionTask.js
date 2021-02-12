function runProgram(input){
	var value=-1
    if(input!=0 && input<=100){
 		if(32/input<1){
    		console.log("Too Low");
     	}else if(32/input>=1){
    		console.log(Math.floor(32/input));
     	}
     }
     else{
     	console.log(value);
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