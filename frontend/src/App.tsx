import { useState, useEffect } from "react";

function App() {
  const [exam, setExam] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/exam/sample")
      .then((r) => r.json())
      .then(setExam);
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Modern Study App</h1>
      {exam ? (
        <div>
          <h2 className="text-xl">{exam.title}</h2>
          {exam.questions.map((q: any, i: number) => (
            <div key={q.id} className="my-4">
              <p>{i + 1}. {q.prompt}</p>
              {q.type === "mcq" &&
                q.choices.map((c: string, idx: number) => (
                  <label key={idx} className="block">
                    <input type="radio" name={q.id} /> {c}
                  </label>
                ))}
              {q.type === "frq" && (
                <textarea className="w-full border p-2" rows={4}></textarea>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading exam…</p>
      )}
    </div>
  );
}

export default App;
