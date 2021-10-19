import Styles from "./_style.module.scss";
import classNames from "classnames";

const { bigTitle } = Styles;

const BigTitle = ({ title, type }) => {
  return <h1 className={classNames(bigTitle, Styles[type])}>{title}</h1>;
};

export default BigTitle;
