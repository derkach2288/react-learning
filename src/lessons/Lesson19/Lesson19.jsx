import "./styles.css";
import { useState } from "react";
import Button from "../../components/Button";
import Counter from "../../components/Counter/Counter";

function Lesson19() {
  const [item, setItem] = useState(["apple"]);

  const [person, setPerson] = useState({ name: "Kate", age: 28 });

  const [name, setName] = useState();
  console.log(name);

  const addFruites = (newFruitsArray) => {
    setItem((prevValue) => [...prevValue, ...newFruitsArray]);
  };

  const addPesonHairColor = (colorHair) => {
    setPerson((prevValue) => ({ ...prevValue, colorHair }));
  };

  const newItems = item.map((el) => {
    return <div key={`fruits-items-${Math.random()}`}>{el}</div>;
  });

  const newPersons = Object.keys(person).map((personKeys) => {
    return (
      <li key={`person-props-${Math.random()}`}>
        {personKeys}: {person[personKeys]}
      </li>
    );
  });
  console.log(newPersons);

  return (
    <div className="lesson19-wrapper">
      <div className="itemsControl">{newItems}</div>
      <div className="buttonControl">
        <Button
          name="Add fruits"
          onClick={() => addFruites(["chery", "orange"])}
        />
      </div>
      <div className="itemsControl">
        Person priperies:
        <ul>{newPersons}</ul>
      </div>
      <div className="buttonControl">
        <Button
          name="Add Hair Color"
          onClick={() => addPesonHairColor("black")}
        />
      </div>
      <div>
        <Counter />
      </div>
      <div className="buttonControl">
        <Button
          name="Add Name"
          onClick={() => setName("Alex")}
        />
      </div>
      {name}
    </div>
  );
}

export default Lesson19;
