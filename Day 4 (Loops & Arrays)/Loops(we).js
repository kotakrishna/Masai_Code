var k=5;
var details="Masai School";
for(var i=0;i<k;i++){
    console.log(details)
}

console.log("----------------------------")
// ------------------------------------

var sum =0, k=0, max=10, sum1=0;
for(var i=0;i<=max;i++){
    if(i%3==0){
        sum=sum+i;
    }
}
console.log(sum)

while(k<=max){
    if(k%3==0){
        sum1=sum1+k;
    }
    k++
}
console.log(sum1);

console.log("----------------------------")
// --------------------------------------

var Number=3
for(var i=1;i<=Number; i++){
    for(var j=1;j<=i;j++){
            console.log(i+"."+j)
    }
}

console.log("----------------------------")
// --------------------------------------

var game_score=[15,2,35,46,57,90];
var min=game_score[0];
for(var i=0;i<game_score.length;i++){
        if(min>game_score[i]){
                min=game_score[i]
        }
}
console.log(min)

console.log("----------------------------")
// --------------------------------------

var string=["notes","books","stuff"];
var count=0;

for(var i=0;i<string.length;i++){
    for(var j=0;j<string[i].length;j++){
        if(string[i][j]!="a"&&string[i][j]!="i"&&string[i][j]!="e"&&string[i][j]!="o"&&string[i][j]!="u"){
            count++;
        }
    }
}
console.log(count)
    

