import Styles from "./_style.module.scss";

const { card, shadowCard1, shadowCard2, containerCard } = Styles;

const Card = ({ children }) => {
  return (
    <div className={containerCard}>
      <div className={shadowCard2} />
      <div className={shadowCard1} />
      <div className={card}>{children}</div>
    </div>
  );
};

export default Card;
