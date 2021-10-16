import Styles from "./_style.module.scss";
import classNames from "classnames";

const { container, button, shadow1, shadow2 } = Styles;

const CustomButton = ({ text, theme }) => {
  return (
    <div className={container}>
      <div className={classNames(shadow2, Styles[`shadow2-${theme}`])} />
      <div className={classNames(shadow1, Styles[`shadow1-${theme}`])} />
      <button type="button" className={classNames(button, Styles[theme])}>
        <span>{text}</span>
      </button>
    </div>
  );
};

export default CustomButton;
