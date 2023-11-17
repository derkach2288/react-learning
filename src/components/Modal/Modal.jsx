import "./styles.css";
import multi, { sum, minus, division } from "./helpers";

// export default function Modal({ children }) {
function Modal({ children }) {
  const sumResult = sum(3, 5);
  const multiplicztionResult = multi(4, 4);
  return (
    <div className="modal-component">
      <p>Cумма:{sumResult}</p>
      <p>Умножение: {multiplicztionResult}</p>
      {children}
    </div>
  );
}

export default Modal;
