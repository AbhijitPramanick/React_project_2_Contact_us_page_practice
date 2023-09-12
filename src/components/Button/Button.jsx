import styles from "./Button.module.css";
import { MdMessage } from "react-icons/md";
const Button = (props) => {
  console.log(props);
  return (
    <div>
      <button
        className={`${props.isWhite ? styles.white_btn : styles.primary_btn}`}
      >
        {props.icon}
        {props.text}
      </button>
    </div>
  );
};

export default Button;
