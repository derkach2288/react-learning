// import logoAv from './5500.jpg';
import logoAv from '../../image/5500.jpg';
import "./styles.css";

function ProfileCard({
  logo = logoAv,
  name = "Oleksandr Derkach",
  job = "developer full stack",
  characters = {
    hair: "Brown",
    height: "188",
  },
  hobby
}) {
  return (
    <div className='container'>
      <img className='avatar' src={logo} alt="logo" />
      <p> Имя, фамилия: {name}</p>
      <p> Работа: {job}</p>
      <p> Цвет волос: {characters.hair} </p>
      <p> Рост: {characters.height} </p>
      <p>Хобби: {hobby}</p>
    </div>
  );
}

export default ProfileCard;
