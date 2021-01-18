var bill=1500;
var Final_bill;
if((bill/10)<=100 && bill>=300){
    Final_bill=bill*(0.9)
    console.log(`The final price ${Final_bill}`);
}else if(bill>=300 && (bill/10)>=100){
    Final_bill=bill-100;
    console.log(`The final price ${Final_bill}`);
}else{
    Final_bill=bill;
    console.log(`The final price ${Final_bill}`);
}