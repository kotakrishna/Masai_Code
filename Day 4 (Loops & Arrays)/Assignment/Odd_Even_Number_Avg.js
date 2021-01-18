var Num_odd_even=[34,-87,23,12,98,-2,0]
var odd_avg=0, Even_avg=0;
var E_count=0, O_count=0;
for(var i=0;i<Num_odd_even.length;i++){
    if(Num_odd_even[i]%2==0){
        Even_avg=Even_avg+Num_odd_even[i];
        E_count++
    }else{
        odd_avg=odd_avg+Num_odd_even[i];
        O_count++
    }
}
 console.log("ODD Average=" + odd_avg/O_count)
 console.log("Even Average=" + Even_avg/E_count)