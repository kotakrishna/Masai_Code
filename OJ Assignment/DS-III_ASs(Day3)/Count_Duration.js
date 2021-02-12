function runProgram(input){
    // Write code here
    input=input.trim().split(/[\r\n]+/)
    var Num_input=input[0];
    var ary=[];
    for(var i=0;i<Number(Num_input);i++){
    ary[i]=input[i+1];
    }
    for(var i=0;i<ary.length;i++){
        var x=ary[i].trim().split(" ").map(Number)
        // for(var j=0;j<x.length;j++){
        var SH=x[0],SM=x[1],EH=x[2],EM=x[3];
        var Strat_time_mins=(SH*60)+SM;
        var End_time_mins=(EH*60)+EM;
        var diff_time_mins=End_time_mins-Strat_time_mins;
        var hr=(diff_time_mins/60)
        var mins=(diff_time_mins%60)
        console.log(Math.floor(hr),Math.floor(mins))
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