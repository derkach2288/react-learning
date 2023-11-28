import "./styles.css";
import { useState } from "react";
import Button from "../../components/Button";

function Lesson19() {

  const [item, setItem] = useState(["apple"]);

  const addFruites = (newFruitsArray) => {
    setItem((prevValue) => [...prevValue, ...newFruitsArray]);
  }

  const newItems = item.map((el) => {
    return <div key={`fruits-items-${Math.random()}`}>{el}</div>
  })
  return (
    <div className="lesson19-wrapper">
      <div className="itemsControl">{newItems}</div>
      <div className="buttonControl">
        <Button
          name="Add fruits"
          onClick={() => addFruites(["chery", "orange"])}
        />
      </div>
    </div>
  );
}

export default Lesson19;
