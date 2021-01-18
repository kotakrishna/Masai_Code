var Name1="Masai School";
var count=0;
while(count<10){
    console.log(Name1);
    count++;
}

// --------------------------------------

var limit= 10;
var total = 0;
for(var i=1; i<=limit; i++){
    total=total+i
    // console.log(total);
}
console.log(total/limit);

// ------------------------------------

var i=0, j=0;
var left=3, right=5;
for(i=1;i<=left;i++){
    for(j=1;j<=right;j++){
        console.log(i+"."+j);
    }
}

// --------------------------------------

var Game_Score=[5,500,10000,300];
var max=Game_Score[0];
for(var i=0;i<=Game_Score.length;i++){
    if(Game_Score[i]>max)
        max=Game_Score[i];
}
console.log(max);


// --------------------------------------
var Name1=["Masai School","kota","krishna"];
var count=0;
for(var i=0;i<Name1.length;i++){
    for(var j=0;j<Name1[i].length;j++){
        if(Name1[i][j]=="a"||Name1[i][j]=="i"||Name1[i][j]=="e"||Name1[i][j]=="o"||Name1[i][j]=="u"){
            count++;
        }
    }     
}
console.log(count);

