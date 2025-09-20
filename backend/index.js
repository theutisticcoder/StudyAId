import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// sample exam endpoint
app.get("/api/exam/sample", (req, res) => {
  res.json({
    id: "sample-1",
    title: "AP Example — Calculus AB",
    duration_minutes: 90,
    questions: [
      { id: "q1", type: "mcq", prompt: "lim x→0 (sin x)/x = ?", choices: ["0","1","∞","undefined"] },
      { id: "q2", type: "frq", prompt: "Compute ∫₀¹ x² dx." }
    ]
  });
});

app.listen(3000, () => console.log("Backend running on port 3000"));
