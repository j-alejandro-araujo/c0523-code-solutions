import express from 'express';

const app = express();

let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradeArray = Object.values(grades);
  res.json(gradeArray);
});

app.post('/api/grades', (req, res) => {
  const newStudent = req.body;
  newStudent.id = nextId++;
  grades[nextId] = newStudent;
  res.status(201).json(newStudent);
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
