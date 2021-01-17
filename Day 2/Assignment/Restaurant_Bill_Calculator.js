var Idle_Price=80;
var Dosa_price= 140;
var Idle_Quantity=6;
var Dosa_Quantity=3;
var Tax=5;
var Discount=8;
var tip = 50;
var bill=(Idle_Price*Idle_Quantity)+(Dosa_Quantity*Dosa_price);
var bill_withTax= (bill*(1+(Tax/100)))
var bill_afterDiscount=(bill_withTax*(1-(Discount/100)));
var Final_bill= (bill_afterDiscount+tip);
console.log(Final_bill);