var ary=["A","C"]
var ary1=["D","C","A","M"]
var count=0
for(i=0;i<ary.length;i++){
    for(j=0;j<ary1.length;j++){
        if(ary[i]==ary1[j]){
            count++
            
        }
    }
}
if(count>=ary.length){
    console.log("TRUE"+"  array 1 is =  "+ary+", array 2 is = "+ary1)
}else{
    console.log("FALSE"+"  array 1 is =  "+ary+", array 2 is = "+ary1)
}