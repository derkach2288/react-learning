import "./styles.css";
import Button from "../Button";
import { useState } from "react";

function Counter() {


  const [count, setCount] = useState(0);

  const counterPlus = () => {
    setCount((prevValue) => prevValue + 1);
  };

  const counterMinus = () => {
    setCount((prevValue) => prevValue - 1);
  }

  return (
    <div className="container">
      <div className="buttonContol">
        <Button onClick={counterMinus} name="Уменьшить на 1" />
      </div>
      <div>
        <p>Count: {count}</p>
      </div>
      <div className="buttonContol">
        <Button onClick={counterPlus} name="Увеличить на 1" />
      </div>
    </div>
  );
}

export default Counter;
