var limit=100;
var  x=0;
var x_1=[];
for(var num=2;num<limit;num++){
    var count=0;
    for(var i =1 ;i<num;i++){
        x=num%i; 
        if (x==0){
             count++;    
        }
    }if(count<=1){
        console.log( num)
    }
}
console.log(x_1)
