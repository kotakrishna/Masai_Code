var input= ["apple", "windows", "ubuntu"]

var output=input.reduce(function(ac,el){
    return ac+ "_" +el 
})

console.log(output);