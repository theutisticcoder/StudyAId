import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({
    id: "sample-1",
    title: "AP Example — Calculus AB",
    duration_minutes: 90,
    questions: [
      { id: "q1", type: "mcq", prompt: "lim x→0 (sin x)/x = ?", choices: ["0","1","∞","undefined"] },
      { id: "q2", type: "frq", prompt: "Compute ∫₀¹ x² dx." }
    ]
  });
}
