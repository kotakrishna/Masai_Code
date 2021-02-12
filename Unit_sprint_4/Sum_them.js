function runProgram(input){
    input=input.split(/[\r\n]+/)
    var count=Number(input[0])
    var values=input[1].split(" ").map(Number)
    var arr=[]
    var sum=0
    for(var i=0;i<count;i++){
    if(i%2!=0){
    arr.push(values[i])
    }
    }
    for(var j=0;j<arr.length;j++){
        sum=sum+arr[j]
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