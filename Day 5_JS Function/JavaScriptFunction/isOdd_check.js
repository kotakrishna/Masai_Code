function isOdd(v){
    if(v%2!=0){
        return true
    }else{
        return false
    }
}

var limit = 25;
for(var i=0;i<=limit;i++){
    if(isOdd(i)){
        console.log(i)
    }
}