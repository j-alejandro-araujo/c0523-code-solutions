/* exported getStudentNames */
function getStudentNames(students) {
  const studentFirstNames = [];

  for (const key of students) {
    const name = key.name;

    studentFirstNames.push(name);
  }
  return studentFirstNames;
}
