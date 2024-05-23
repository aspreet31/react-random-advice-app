import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    const data = await fetch("https://api.adviceslip.com/advice");
    const response = await data.json();
    const { advice } = response.slip;
    setAdvice(advice);
  };
  return (
    <>
      <div className="app">
        <div className="card">
          <h1>{advice}</h1>
          <button
            onClick={() => {
              fetchAdvice();
            }}
            className="bg-transparent hover:bg-[#431407] text-[#431407] font-semibold hover:text-white py-2 px-4 border border-[#431407] hover:border-transparent rounded"
          >
            Give me Advice!
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
