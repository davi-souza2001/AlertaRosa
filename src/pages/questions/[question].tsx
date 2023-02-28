import { useState } from "react";

const QuizPage = () => {
  const [question, setQuestion] = useState("Qual é a capital do Brasil?");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">{question}</h1>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Brasília
        </button>
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          São Paulo
        </button>
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Rio de Janeiro
        </button>
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Belo Horizonte
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
