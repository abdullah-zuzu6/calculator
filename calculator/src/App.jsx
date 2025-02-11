
import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div>
      <style>
        {`
          
          .calculator {
          position:absolute;
        top:50%;
          left:50%;
          transform:translate(-50%,-50%);
            background: #2d3748;
            padding: 16px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 260px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .display {
            width: 100%;
            margin-bottom: 12px;
            text-align: right;
            padding: 12px;
            background: #4a5568;
            border-radius: 4px;
            font-size: 20px;
            font-family: monospace;
            overflow-x: auto;
            white-space: nowrap;
          }
          .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 6px;
          }
          .button {
            background: #4a5568;
            padding: 12px;
            border-radius: 4px;
            font-size: 18px;
            cursor: pointer;
            text-align: center;
            transition: background 0.2s;
          }
          .button:hover {
            background: #718096;
          }
          .clear-button {
            grid-column: span 4;
            background: #e53e3e;
          }
          .clear-button:hover {
            background: #c53030;
          }
          @media (max-width: 400px) {
            .calculator {
              width: 200px;
            }
            .button {
              font-size: 16px;
              padding: 10px;
            }
          }
        `}
      </style>
        <div className="calculator">
          <div className="display">{input || "0"}</div>
          <div className="buttons">
            {"7 8 9 / 4 5 6 * 1 2 3 - 0 . = +".split(" ").map((char) => (
              <button 
                key={char} 
                onClick={() => (char === "=" ? calculateResult() : handleClick(char))} 
                className="button"
              >
                {char}
              </button>
            ))}
            <button onClick={clearInput} className="button clear-button">
              Clear
            </button>
          </div>
        </div>
      
    </div>
  );
}
