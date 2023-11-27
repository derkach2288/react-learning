import "./App.css";
import Button from "./components/Button";
import ProfileCard from "./components/ProfileCard";
import logo1 from "./image/volga.jpeg";
import logo2 from "./image/logo2.jpeg";
import Lesson18 from "./lessons/lesson18"

export const animal = "Dog";

function App() {
  // JSX позволят нам создавать переменные и передавать туда теги
  // const name = <p>My name is Gleb</p>;
  // const job = "Frontend developer";
  // const tegJobId = "job";

  // const characters = {
  //   hair: "black",
  //   height: "185",
  // };

  // const sum = (a, b) => a + b;

  // const numberOfFriends = (count) => {
  //   if (count > 5) {
  //     return `У вас ${count} друзей`;
  //   } else {
  //     return "У вас менее 5 друзей";
  //   }
  // };

  // const rich = true;

  return (
    <div className="App">
      {/* {name} */}
      {/* JSX позволяет нам передавать переменные с помощью фигурных скобок в HTML дерево */}
      {/* <p id={tegJobId}>I am {job}</p>
      <p>Возвращаемая сумма: {sum(2, 2)}</p>
      <p>Характеристики</p>
      <ul>
        <li>Цвет волос: {characters.hair}</li>
        <li>Рост:{characters.height} </li>
      </ul>
      <p>Favorite animal:{animal}</p>
      <div>{numberOfFriends(7)}</div>
      <div>{rich ? "Вы богатый" : "Вы не в достатке"}</div> */}
      <div className="button-container">
        <Button name="Отправить" type="submit" />
      </div>
      <div className="button-container">
        <Button name="Получить товар" type="submit" />
      </div>
      <div className="button-container">
        <Button>Children element</Button>
      </div>
      <div className="button-container">
        <Button />
      </div>
      <div className="button-container">
        <Button />
      </div>

      <div className="cards">
        <div>
          <ProfileCard hobby="meditation" />
        </div>
        <div>
          <ProfileCard
            // logo="https://ss.sport-express.ru/userfiles/materials/190/1907029/volga.jpg"
            logo={logo1}
            name="Jeck Jonson"
            hobby="Футбол"
            job="Инженер"
            characters={{ hair: "black", height: "185" }}
          />
        </div>
        <div>
          <ProfileCard
            logo={logo2}
            name="Мария Кюри"
            hobby="Химия"
            job="Преподаватель"
            characters={{ hair: "русые", height: "175" }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
