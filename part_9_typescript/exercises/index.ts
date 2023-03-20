import express from 'express';
import calculateBmi from './calculateBmi';
import { calculator, Operation } from './calculator';
const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);
  const bmi: string = calculateBmi(height, weight);

  if (!height || !weight) {
    res.status(400).send({ error: 'malformatted parameters' });
  }

  res.status(200).send({ height, weight, bmi });
});

app.post('/calculate', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;

  if (!value1 || isNaN(Number(value1))) {
    return res.status(400).send({ error: '...' });
  }


  const result = calculator(Number(value1), Number(value2), op as Operation);
  res.send({ result });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});