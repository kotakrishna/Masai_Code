var year=2020;
if(year%4==0 && year%100!=0){
    for(i=1;i<=12;i++){
        if(i==1 || i==3||i==5||i==7||i==8||i==10||i==12){
            for(j=1;j<=31;j++){
                console.log(year+"-"+i+"-"+j)
            }
        }else if(i!=2){
            for(j=1;j<=30;j++){
                console.log(year+"-"+i+"-"+j)
            }
        }else{
            for(j=1;j<=29;j++){
                console.log(year+"-"+i+"-"+j) 
            }
        }
    }
}else{
    for(i=1;i<=12;i++){
        if(i==1 || i==3||i==5||i==7||i==8||i==10||i==12){
            for(j=1;j<=31;j++){
                console.log(year+"-"+i+"-"+j)
            }
        }else if(i!=2){
            for(j=1;j<=30;j++){
                console.log(year+"-"+i+"-"+j)
            }
        }else{
            for(j=1;j<=28;j++){
                console.log(year+"-"+i+"-"+j) 
            }
        }
}
}