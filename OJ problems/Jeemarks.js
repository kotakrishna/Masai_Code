function runProgram(input){
    input=input.split(/[\r\n]+/)
 var student1=input[0].trim().split(" ").map(Number)
 var student2=input[1].trim().split(" ").map(Number)
 var st1sum=0;
 var st2sum=0;
 for(var i=0;i<=2;i++){
 st1sum= st1sum+student1[i]
 st2sum= st2sum+student2[i]
 }
 console.log(st1sum)
 //console.log(marks)

if(st1sum>st2sum || (st1sum===st2sum && student1[2]>student2[2])|| ((st1sum===st2sum && student1[2]===student2[2])&& student1[0]>student2[0])){
    console.log("First")
}else{
    console.log("Second");
}
//  if(st1sum>st2sum){
//     console.log("First")
//  }
//  else if(st1sum<st2sum){
//     console.log("Second")
//  }
//  else if(st1sum==st2sum){
//     if((student1[2])>(student2[2])){
//         console.log("First")
//     }else if((student1[2])<(student2[2])){
//         console.log("Second")
//     }
//     else if(((student1[0])>(student2[0]))){
//         console.log("First")
//     } else if(((student1[0])<(student2[0]))){
//         console.log("Second")
//     }
//     else{
//         console.log("Second")
//     }
// //  console.log(input)
// }else{
//     console.log("Second")
// }
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