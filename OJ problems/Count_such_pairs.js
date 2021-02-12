function runProgram(input){
    input=input.split(/[\r\n]+/)
    var first_line=input[0].split(" ")
    var ar_ln=first_line[0]
    var val=first_line[1]
    var count=null
    var ary=input[1].split(" ").map(Number)
    for(var i=0;i<ar_ln;i++){
        for(var j=1;j<ar_ln;j++){
        if(ary[i]+ary[i+j]==val){
            count++
            }
        }
    }
    if(ar_ln==count){
        console.log(count-1);
    }else{
    console.log(count)
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