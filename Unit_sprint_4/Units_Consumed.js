function runProgram(input){
    input=Number(input)-80;
    var units=0
    // if(input<0){
    //     console.log(0)
    // }
    // if((input-150)<0){
    //     units=input/3
    // }
    // else if((input-150)>0){
    //     units=50
    //     input=input-150
    // }
    // if((input-500)>0){
    //     units= units+100
    //     input=input-500
    // }else if((input-500)<0){
    //     units=units+input/5
    //     input=input-500
    // }
    // if((input)>0){
    //     units=units+input/10
    // }
    // console.log(units)

    if(input<0){
        console.log(0)
    }
    if((input-150)<0){
        units=input/3
    }
    else{
        units=50
        input=input-150
    }
    if((input-500)>0){
        units= units+100
        input=input-500
    }else{
        units=units+input/5
        input=input-500
    }
    if((input)>0){
        units=units+input/10
    }
    console.log(units)
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