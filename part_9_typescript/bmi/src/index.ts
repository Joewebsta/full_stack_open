import express from "express";
import { calculateBmi } from "./bmiCalculator";
const app = express();
const PORT = 3003;

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;

  try {
    const BmiCategory = calculateBmi(Number(height), Number(weight));
    const BmiData = {
      height,
      weight,
      bmi: BmiCategory,
    };

    res.json(BmiData);
  } catch (error) {
    if (error instanceof Error) {
      res.json({
        error: "malformed parameters",
      });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
