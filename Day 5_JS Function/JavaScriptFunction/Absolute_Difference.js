function diff(v1,v2){
    var x=v1-v2
    if(x>0){
        return x
    }else{
        return (x*(-1))
    }
}

var v1=-24,v2=-56;
console.log(diff(v1,v2))