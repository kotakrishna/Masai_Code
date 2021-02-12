var input= ["Apple", "Windows", "Linux", "Kindle", "Quiz"];

var odd_length= function(el){
    return (el.length%2!=0)
}

var length_val=function(el){
    return el.length
}


var output=input.filter(odd_length).map(length_val).reduce(function(ac,el){
                                                            return ac+el
                                                                        },0)

console.log(output);