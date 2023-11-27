import "./styles.css";

function Button({ onClick, name = "Send", type = "button", children }) {
  return (
    <button onClick={onClick} className="button-component" type={type}>
      {name}
      {children}
    </button>
  );
}

export default Button;
