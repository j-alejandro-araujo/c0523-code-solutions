import express from 'express';

const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};

app.get('/api/grades', (req, res) => {
  const gradeArray = [];

  for (const gradeId in grades) {
    gradeArray.push(grades[gradeId]);
  }
  res.json(gradeArray);
});

app.delete('/api/grades/:id', (req, res) => {
  const gradeId = req.params.id;
  if (grades[gradeId]) {
    delete grades[gradeId];
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
