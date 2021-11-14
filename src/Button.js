import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

export default Button;

Button.prototype = {
  text: PropTypes.string.isRequired,
};
