import express from 'express';
import calculateBmi from './calculateBmi';
const app = express();

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height: number = Number(req.query.height);
  const weight: number = Number(req.query.weight);
  const bmi: string = calculateBmi(height, weight);

  if (!height || !weight) {
    res.status(400).send({ error: 'malformatted parameters' });
  }

  res.status(200).send({ height, weight, bmi })
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})