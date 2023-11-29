import { useState } from "react";
import Button from "../../components/Button";

function HomeWork19() {
  const porscheCar = {
    brand: "Porsche",
    model: "911",
    year: 2023,
    color: "Silver",
    price: 120000,
    isAvailable: true,
  };

  const [auto, setAuto] = useState({});

  const newCar = Object.keys(auto).map((autoKeys) => {
    return (
      <li key={`auto-props-${Math.random()}`}>
        {autoKeys}: {auto[autoKeys].toString()}{" "}
      </li>
    );
  });

  const addCar = () => {
    setAuto((prevValue) => ({ ...prevValue, ...porscheCar }));
  };

  return (
    <div className="lesson19-wrapper">
      <div className="buttonControl">
        <Button name="Add Car" onClick={() => addCar()} />
      </div>
      <div className="itemsControl">{newCar}</div>
    </div>
  );
}

export default HomeWork19;
