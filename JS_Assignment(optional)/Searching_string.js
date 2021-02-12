var str1="instagram";
var str2="coffee"
var count=0
for(i=0;i<=str1.length;i++){
    if(str1.substring(i,i+str2.length)==str2){
        console.log("TRUE :"+" str1 is = "+str1+ ", str2 is = "+str2)
        count++
        break;
    }
}
if(count==0){
    console.log("FALSE :"+" str1 is = "+str1+ ", str2 is = "+str2)
}