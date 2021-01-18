var char="hannah";
var count=0;
var x=[]
for(i=1;i<=char.length;i++){
    x.push(char[char.length-i])
}
for(i=1;i<=char.length;i++){
    if(x[i]==char[i]){
        count++
    }
}
if(count==char.length){
    console.log(`${char} is YES`)
}else{
    console.log(`${char} is NO`)
}

// if(c=char.length/2){
//     console.log("YES")
// }else{
//     console.log("NO")
// }

// var char1=char.replace(char[1],char[char.length-1])
// console.log(char1)
