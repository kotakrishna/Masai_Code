var input=[2, 4, 5, 3, 6, 8]

var some_criteria= function(el,ind){
    return (ind%2==0 && el%2==0)
}

var output=input.filter(some_criteria)

console.log(output);