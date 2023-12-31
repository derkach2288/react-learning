import { useState } from "react";

import Button from "../Button";

import "./styles.css";

function Counter({count, onPlus, onMinus, text}) {
  // const [count, setCount] = useState(0);

  // const onPlus = () => {
  //   setCount((prevValue) => prevValue + 1);
  // };

  // const onMinus = () => {
  //   setCount((prevValue) => prevValue - 1);
  // };

  return (
    <div className="counter-wrapper">
      {text && <p>{text}</p>}
      <div className="button-control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="counter-text">{count}</p>
      <div className="button-control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;
