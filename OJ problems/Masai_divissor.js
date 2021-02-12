function runProgram(input){
    num=input.split(" ").map(Number)
    var count=0;
    console.log(typeof(num[0]))
    for(var i=Number(num[0]); i<=Number(num[1]);i++){
        console.log(i)
    	console.log(( i%num[2]==0))
            console.log(i)
   			 count++
    }
    console.log(count)
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