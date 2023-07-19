import express from 'express';
import pg from 'pg';

const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

// Utilizing GET
app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
    SELECT *
    FROM "grades"
    `;

    const result = await db.query(sql);
    const grades = result.rows;
    res.json(grades);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error has occured.' });
  }
});

// Utilizing POST
app.post('/api/grades', async (req, res) => {
  try {
    const { name, course, score } = req.body;

    if (!name || !course || typeof score !== 'number' || score < 0) {
      res.status(400).json({
        error:
          'Invalid information, requires: Name[name], Course[number], and Score[0 - 100].',
      });
      return;
    }

    const sql = `
    INSERT INTO "grades" ("name", "course", "score")
    VALUES ($1, $2, $3)
    RETURNING *
    `;

    const params = [name, course, score];
    const result = await db.query(sql, params);

    const newGrade = result.rows[0];
    res.status(201).json(newGrade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error has occured.' });
  }
});

// Utilizing PUT
app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const { gradeId } = req.params;
    const { name, course, score } = req.body;

    if (!name || !course || typeof score !== 'number' || score < 0) {
      res.status(400).json({
        error:
          'Invalid information, requires: Name[name], Course[number], and Score[0 - 100].',
      });
      return;
    }

    const updateSql = `
      UPDATE "grades"
      SET "name" = $1,
          "course" = $2,
          "score" = $3
      WHERE "id" = $4
      RETURNING *
    `;

    const updateParams = [name, course, score, gradeId];
    const updateResult = await db.query(updateSql, updateParams);

    if (updateResult.rowCount === 0) {
      res.status(404).json({ error: `Grade with ID ${gradeId} not found.` });
      return;
    }

    const updatedGrade = updateResult.rows[0];
    res.status(200).json(updatedGrade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error has occurred.' });
  }
});

// Utilizing DELETE
app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const { gradeId } = req.params;

    if (!Number.isInteger(Number(gradeId))) {
      res
        .status(400)
        .json({ error: 'Invalid gradeId. It should be a valid integer.' });
      return;
    }

    const deleteSql = `
      DELETE FROM "grades"
      WHERE "id" = $1
      RETURNING *
    `;

    const deleteParams = [gradeId];
    const deleteResult = await db.query(deleteSql, deleteParams);

    if (deleteResult.rowCount === 0) {
      res.status(404).json({ error: `Grade with ID ${gradeId} not found.` });
      return;
    }

    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error has occurred.' });
  }
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
