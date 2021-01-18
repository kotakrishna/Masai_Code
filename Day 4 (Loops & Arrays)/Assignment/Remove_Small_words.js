var Str=["A", "Quick", "Brown", "Fox", "Jumps", "Over", "A", "Lazy", "Dog"]
var x_1=[];
for(var i=0;i<Str.length;i++){
    if(Str[i].length>=4){
        x_1.push(Str[i])
    }
}
console.log(x_1)