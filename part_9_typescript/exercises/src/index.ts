import express from "express";
import calculateBmi from "../archive/calculateBmi";
const app = express();
const PORT = 3003;

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.get("/bmi", (req, res) => {
  const {height, weight} = req.query;
  

  res.json();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
