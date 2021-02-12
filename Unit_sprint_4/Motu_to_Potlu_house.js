function runProgram(input){
    input=Number(input)
    var sum=0
    var count=1
    var i =input
    while(i>0){
        i=input
        if((i/5)>0){
            sum=sum+count
            input=input-5;
        // }else if((i/4)>0){
        //     sum=sum+count
        //     input=input-4;
        
        // }else if((i/3)>0){
        //     sum=sum+count
        //     input=input-3;
        
        // }else if((i/2)>0){
        //     sum=sum+count
        //     input=input-2;
        
        // }else if((i/1)>0){
        //     sum=sum+count
        //     input=input-1;
        // }
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