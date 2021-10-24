import Styles from "./_style.module.scss";
import classNames from "classnames";

const { bigTitle, subText, titleContainer } = Styles;

const BigTitle = ({ title, type, subTitle }) => {
  return (
    <div className={titleContainer}>
      <h1 className={classNames(bigTitle, Styles[type])}>{title}</h1>
      {subTitle && (
        <span className={classNames(subText, Styles[type])}>{subTitle}</span>
      )}
    </div>
  );
};

export default BigTitle;
