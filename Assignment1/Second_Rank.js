var array=[5,4,3,2,1]
var array2=[];
var max=0; max1=0;
var x=0
for(i=0;i<array.length;i++){
    if(max<array[i]){
        max=array[i]
       x=i; 
    }
}
// console.log(x+"  "+ max)
for(i=0;i<array.length;i++){
    if(i!=x){
        array2[i]=array[i]
    }
}
for(var j=0;j<array2.length;j++){
    if(max1<array2[j]){
        max1=array2[j] 
    }
}
console.log(max1)
