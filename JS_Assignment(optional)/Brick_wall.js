var height=6
var width=10
var lefthalfBrick="___|"
var x="__|"
for(i=1;i<=height;i++){
    var brick="|___|"
    if(i%2!=0){
    for(j=1;j<=width;j++){
        brick=brick+lefthalfBrick
    }console.log(brick)
    }else{
        var odd="__|"
    for(var j=0;j<=width;j++){
       if(j-1<width-1){
          odd=odd+lefthalfBrick 
       }else{
            odd=odd+"__"
        }    
        }console.log(odd)
    }
}
