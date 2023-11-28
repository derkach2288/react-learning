import Counter from "../../components/Counter";
import {useState} from "react"

function HomeWork18() {
    const [count, setCount] = useState(0);

    const onPlus = () => {
      setCount((prevValue) => prevValue + 1);
    };

    const onMinus = () => {
      setCount((prevValue) => prevValue - 1);
    };

  return <Counter count={count} onPlus={onPlus} onMinus={onMinus} />;
}

export default HomeWork18;
