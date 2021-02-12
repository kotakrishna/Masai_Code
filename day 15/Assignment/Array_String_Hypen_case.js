var input=["Apple", "Windows", "UBUNTU"]
var apl="abcdefghijklmnopqrstuvwxyz"
var Apl="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var Hypen=function (el){
    var x="";
for(var i=0;i<el.length;i++){
    for(var j=0;j<apl.length;j++){
            if(apl[j]==el[i]){
                x=x+ apl[j]
            }else if(Apl[j]==el[i]){
                x=x+ apl[j]
            }
        }
    }
    return x
}

var output=input.map(Hypen).reduce(function(ac,el){
    return ac +"-"+el
})
console.log(output);