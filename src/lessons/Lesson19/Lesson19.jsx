import "./styles.css";
import { useState } from "react";
import Button from "../../components/Button";
import Counter from "../../components/Counter/Counter";

function Lesson19() {
  const [item, setItem] = useState(["apple"]);

  const [person, setPerson] = useState({ name: "Kate", age: 28 });

  const [name, setName] = useState();
  console.log(name);

  // пример с картинкой
  const [img, setImg] = useState();

  //---------
  const [count, setCount] = useState(0);

  const onPlus = () => {
    setCount((prevValue) => prevValue + 1);
  };

  const onMinus = () => {
    setCount((prevValue) => prevValue - 1);
  };

  //-------------

  const addImg = (imgURL) => {
    setImg(imgURL);
  };

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
        <Counter count={count} onPlus={onPlus} onMinus={onMinus} />
      </div>
      <div className="buttonControl">
        <Button name="Add Name" onClick={() => setName("Alex")} />
      </div>
      {name}

      <div>Пример с картинкой</div>
      {img && <img src={img} alt="" />}
      <div className="buttonControl">
        <Button
          name="Add Img"
          onClick={() =>
            setImg(
              "https://www.azcentral.com/gcdn/-mm-/fd5c5b5393c72a785789f0cd5bd20acedd2d2804/c=0-350-2659-1850/local/-/media/Phoenix/BillGoodykoontz/2014/04/24//1398388295000-Homer-Simpson.jpg?width=2659&height=1500&fit=crop&format=pjpg&auto=webp"
            )
          }
        />
      </div>
    </div>
  );
}

export default Lesson19;
