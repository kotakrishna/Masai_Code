var Grade={
    grade_students:[
    {
        grade: "V",
        students: [
            {name: "Nrupul", marks: [10, 20, 30]},
            {name: "Prateek", marks: [20, 30, 40]}
        ]
    },
    {
        grade: "VI",
        students: [
            {name: "Aman", marks: [10, 20, 30]},
            {name: "Albert", marks: [20, 30, 40]}
        ]
    },
    {
        grade: "VII",
        students: [
            {name: "Yogesh", marks: [10, 20, 30]},
            {name: "Sandhya", marks: [20, 30, 40]}
        ]
    }
  ],
}

//   highmarks: function(){
//       var ary=[]
//       for(var i=0;i<this.grade.length;i++){
//           var max=0
//         for(var j=0;j<this.grade[i].students.length;j++){
//             var total=0
//             for(var k=0;k< this.grade[i].students[j].marks.length;k++){

//                 total= total+this.grade[i].students[j].marks[k]

//             }
//             if(max<total){
//                 max=total
//             }
//             // if(max>=total ){
//             // console.log(this.grade[i].grade+ "-"+this.grade[i].students[j].name + "-" + total )
//         // }
//         }if(max>=total){
//             console.log(this.grade[i].grade+ "-"+this.grade[i].students[0].name + "-" + total )
//         }
//   }

// }
// }


// Grade.highmarks()

// console.log(Grade.grade_students[1].students[0].marks[0])
// for key in Grade.grade_students[0].students[0].name
var ary=[]

for(var i=0;i<Grade.grade_students.length;i++){
    // console.log(Grade.grade_students[i])
    
    for(var j=0;j<Grade.grade_students[i].students.length;j++){
        // console.log(Grade.grade_students[i].students[j])
        var sum=0;
        for(var k=0;k<Grade.grade_students[i].students[j].marks.length;k++){
            sum=sum +Number(Grade.grade_students[i].students[j].marks[k])
            var x=null;
            // max=sum
            }
            
            // if(max<sum){
            //     max=sum;
                x= Grade.grade_students[i].grade+"--"+Grade.grade_students[i].students[j].name +"--" +sum
                ary.push(x)
            // }
            console.log(sum)
            var max=sum;
            
    }
}
console.log(ary)