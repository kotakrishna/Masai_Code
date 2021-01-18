// Given a number using a while loop print if its a Prime Number or Not

var num= 14;
var count=0;
for(var i =1 ;i<=num;i++){
    var x= num%i;
    if (x==0){
         count++
 
        }
}
if(count<=2){
    console.log("Prime Number")
}else{
    console.log(" Not Prime")
}


console.log("-------------------------------------------")

// ------------------------------------
// Print the average of all the numbers starting from 0 to the given limit that are multiples of 3

var max,div,count,d;
max=7, div=0, sum=0, count=0;
for(var i=0;i<=max;i++){
    div=i%3;
    if(div==0 && i!=0){
        sum=sum+i
        count++
    }
}
var avg= sum/count;
console.log(avg);


console.log("-------------------------------------------")
// --------------------------------------

// Print the sum of all odd and even numbers separately from a given starting and ending limit

var start=4,end=8;
var sum_of_even=0,sum_of_odd=0;

for(var i=start;i<=end;i++){
    if(i%2==0){
        sum_of_even= sum_of_even+i;
    }else{
        sum_of_odd=sum_of_odd+i;
    }
}
console.log(`sum of even number ${sum_of_even}`)
console.log(`sum of odd number ${sum_of_odd}`)


console.log("-------------------------------------------")
// --------------------------------------
// Given an array of game, scores print the lowest and highest score


var game_score=[50,60,400,380,200,809]
var max_score=game_score[0], min_score=game_score[0];
for(var i=0;i<=game_score.length;i++){
    if(max_score<game_score[i]){
        max_score=game_score[i];
    }else if(min_score>game_score[i]){
        min_score=game_score[i];
        }
}
console.log("max score is "+max_score);
console.log("min score is"+min_score);

console.log("-------------------------------------------")
// -----------------------------------
// Given a number using a for loop print if its a Prime Number or Not

var num=11;
var count=0;
for(var i=0;i<=num;i++){
    var div=num%i;
    if(div==0){
        count++
    }
}
if(count<=2){
    console.log("Prime number")
}else{
    console.log("Not Prime")
}

console.log("-------------------------------------------")
// -----------------------------------
// Given an array of strings count the number of Vowels and Consonants present

var string1=["kota", "krishna","sai","reddy"];
var vowels=0, con=0;
for(var i=0;i<string1.length;i++){
    for(var j=0;j<string1[i].length;j++){
        if(string1[i][j]=="a"||string1[i][j]=="e"||string1[i][j]=="i"||string1[i][j]=="u"||string1[i][j]=="o"){
            vowels++;
        }else{
            con++;
        }
    }
}
console.log("vowels="+vowels);
console.log("cons="+con);

console.log("-------------------------------------------")