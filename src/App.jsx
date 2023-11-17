import "./App.css";
import Button from "./components/Button";
import Modal from "./components/Modal"

export const animal = "Dog";

function App() {
  // JSX позволят нам создавать переменные и передавать туда теги
  const name = <p>My name is Gleb</p>;
  const job = "Frontend developer";
  const tegJobId = "job";

  const characters = {
    hair: "black",
    height: "185",
  };

  const sum = (a, b) => a + b;

  const numberOfFriends = (count) => {
    if (count > 5) {
      return `У вас ${count} друзей`;
    } else {
      return "У вас менее 5 друзей";
    }
  };

  const rich = true;

const buttonNames = [
  "Отправить",
  "Получить товар",
  "Купить",
  "Заказать",
  "Продать",
];
  
  const buttons = buttonNames.map((value) => {
    return (
      <div className="button-container">
        <Button name={value} />
      </div>
    );
  })
  
  return (
    <div className="App">
      {buttons}
      
      {name}
      {/* JSX позволяет нам передавать переменные с помощью фигурных скобок в HTML дерево */}
      <p id={tegJobId}>I am {job}</p>
      <p>Возвращаемая сумма: {sum(2, 2)}</p>
      <p>Характеристики</p>
      <ul>
        <li>Цвет волос: {characters.hair}</li>
        <li>Рост:{characters.height} </li>
      </ul>
      <p>Favorite animal:{animal}</p>
      <div>{numberOfFriends(7)}</div>
      <div>{rich ? "Вы богатый" : "Вы не в достатке"}</div>
      <div className="button-container">
        <Button name="Отправить" />
      </div>
      <div className="button-container">
        <Button name="Получить товар" />
      </div>
      <div className="button-container">
        <Button name="Купить" />
      </div>
      <div className="button-container">
        <Button name="Заказать" />
      </div>
      <div className="button-container">
        <Button name="Продать" />
      </div>
    </div>
  );
}

export default App;
