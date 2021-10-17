import Styles from "./_style.module.scss";

const { bigTitle } = Styles;

const BigTitle = ({ title }) => {
  return <h1 className={bigTitle}>{title}</h1>;
};

export default BigTitle;
