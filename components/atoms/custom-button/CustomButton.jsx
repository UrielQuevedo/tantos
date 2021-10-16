import Styles from "./_style.module.scss";
import classNames from "classnames";
import { Button } from "antd";

const { container, button, shadow1, shadow2 } = Styles;

const CustomButton = ({ text, theme }) => {
  return (
    <div className={container}>
      {/*<div className={classNames(shadow2, Styles[`shadow2-${theme}`])} />*/}
      {/*<div className={classNames(shadow1, Styles[`shadow1-${theme}`])} />*/}
      <Button className={classNames(button, Styles[theme])}>
        <span>{text}</span>
      </Button>
    </div>
  );
};

export default CustomButton;
