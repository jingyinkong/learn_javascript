var studentNum = prompt("请输入学生的总人数");
var studentGrade = 0;
var gradeSum = 0;
for (var i = 0; i < parseInt(studentNum); i++) {
    studentGrade = prompt("请输入第" + i + "个学生的成绩");
    gradeSum = gradeSum + parseInt(studentGrade);
    console.log(gradeSum);
}

alert("平均分为:" + (gradeSum / parseInt(studentNum)));