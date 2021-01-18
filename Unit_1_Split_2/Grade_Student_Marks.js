var Grade={
    grade:[
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
  highmarks: function(){
      var ary=[]
      for(var i=0;i<this.grade.length;i++){
          var max=0
        for(var j=0;j<this.grade[i].students.length;j++){
            var total=0
            for(var k=0;k< this.grade[i].students[j].marks.length;k++){

                total= total+this.grade[i].students[j].marks[k]

            }
            if(max<total){
                max=total
            }
            // if(max>=total ){
            // console.log(this.grade[i].grade+ "-"+this.grade[i].students[j].name + "-" + total )
        // }
        }if(max>=total){
            console.log(this.grade[i].grade+ "-"+this.grade[i].students[0].name + "-" + total )
        }
  }

}
}


// console.log(Grade.grade[1].students[1].marks[1])

Grade.highmarks()