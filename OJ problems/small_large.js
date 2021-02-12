function runProgram(input){
    input=input.split(/[\r\n]+/)
    var ary_ln=input[0]
    var ary=input[1].split(" ")
    var min=10000
    var max=-1000
    for(var i=0;i<ary_ln;i++){
        if(min>Number(ary[i])){
            min=Number(ary[i])
        }
    }
    for(var j=0;j<ary_ln;j++){
        if(max<Number(ary[j])){
            max=Number(ary[j])
        }
    }
    console.log(min);
    console.log(max);
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