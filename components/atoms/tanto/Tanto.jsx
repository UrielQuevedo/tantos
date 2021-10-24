import Styles from "./_style.module.scss";
import classNames from "classnames";

const { points, title, container } = Styles;

const Tanto = ({ tanto, text, theme }) => {
  return (
    <div className={container}>
      <span className={classNames(points, Styles[theme])}>{tanto}</span>
      <span className={classNames(title, Styles[theme])}>{text}</span>
    </div>
  );
};

export default Tanto;
