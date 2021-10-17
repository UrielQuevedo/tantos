import Styles from "./_style.module.scss";
import classNames from "classnames";
import { Button } from "antd";

const { containerShadow, button, shadow1, shadow2 } = Styles;

const CustomButton = ({ text, icon, theme, ...props }) => {
  return (
    <div className={classNames(containerShadow)}>
      <div className={classNames(shadow2, Styles[`shadow2-${theme}`])} />
      <div className={classNames(shadow1, Styles[`shadow1-${theme}`])} />
      <Button className={classNames(button, Styles[theme])} {...props}>
        <span>
          {text} {icon}
        </span>
      </Button>
    </div>
  );
};

export default CustomButton;
