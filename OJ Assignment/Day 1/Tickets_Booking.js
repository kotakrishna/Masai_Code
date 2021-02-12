function runProgram(input){
    // Write code here
    var total=input.split(/[\r\n]+/);
    var ticket_cost=total[0].split(" ")
    var ticket_count=total[1].split(" ")
    var sum=0;
    for(var i=0;i<ticket_cost.length;i++){
    	sum=sum +(Number(ticket_cost[i])*Number(ticket_count[i]))
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