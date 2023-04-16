

/*********************SOLUCION********************/
function gradingStudents(grades) {
      let roundedGrades = [];
  for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];
    let roundedGrade = grade;
    if (grade < 38) {
      roundedGrades.push(grade);
    } else {
      let nextMultipleOf5 = Math.ceil(grade / 5) * 5;
      if (nextMultipleOf5 - grade < 3) {
        roundedGrade = nextMultipleOf5;
      }
      roundedGrades.push(roundedGrade);
    }
  }

  return roundedGrades;
}
/*******************************************************/

