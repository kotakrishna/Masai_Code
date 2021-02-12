var input=["apple", "windows", "ubuntu", "cola", "system"]

var pattern= function(el){
    return(el[0]=="a" || el[el.length - 1]=="a")
     
}

var output=input.filter(pattern);

console.log(output);