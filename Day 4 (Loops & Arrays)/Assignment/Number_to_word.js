var num1= 231956327;
var n_str=num1.toString();
var x="";
for(i=0;i<=n_str.length;i++){
    switch (n_str[i]) {
        case "1":
            x=x+" One"
            break;
        case "2":
            x=x+" Two"
            break;
        case "3":
            x=x+" Three"
            break;
        case "4":
            x=x+" Four"
            break;
        case "5":
            x=x+" Five"
            break;
        case "6":
            x=x+" Six"
            break;
        case "7":
            x=x+" Seven"
            break;
        case "8":
            x=x+" Eight"
            break;
        case "9":
            x=x+" Nine"
            break;
        case "0":
            x=x+" Zero"
            break;

        default:
            console.log(" ")
            break;
}
}
console.log(x)