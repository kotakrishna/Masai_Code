function runProgram(input){
    input=input.split(/[\r\n]+/)
    var cont=input[0]
    var val=input[1].split(" ").map(Number)
    
    var sum=0;
    for(var i=0;i<Number( cont);i++){
    	sum=sum+val[i]
    }
    //console.log(sum)
    if(sum>100){
        console.log("Greater")
    }else{
        console.log("Lesser")
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
