var str=["ab","cd","ef","gh"]
var count_con=0, count_Vowel=0
for(var i=0;i<str.length;i++){
    for(var j=0; j<str[i].length;j++){
        if(str[i][j]=="a"||str[i][j]=="i"||str[i][j]=="e"||str[i][j]=="o"||str[i][j]=="u"){
            count_Vowel++
        }else{
            count_con++
        }
    }
}
console.log(count_Vowel);
console.log(count_con)