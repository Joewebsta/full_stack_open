import express from "express";
// import { calculator, Operation } from "./calculator";
import { calculateExercises } from "./calculateExercises";
const app = express();
app.use(express.json());
const PORT = 3003;

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { dailyExerciseHours, target } = req.body;

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = calculateExercises(dailyExerciseHours, target);
    res.send(result);
  } catch (error) {
    if (error instanceof Error) {
      res.send({ error: error.message });
    }
  }
});

// app.post("/calculate", (req, res) => {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   const { value1, value2, op } = req.body;

//   if (!value1 || isNaN(Number(value1))) {
//     return res.status(400).send({ error: "..." });
//   }

//   if (!value2 || isNaN(Number(value2))) {
//     return res.status(400).send({ error: "..." });
//   }

//   const result = calculator(Number(value1), Number(value2), op as Operation);

//   res.send({ result });
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
