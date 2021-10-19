import Styles from "./_style.module.scss";
import HeaderLayout from "../../components/layouts/HeaderLayout";
import BigTitle from "../../components/atoms/big-title/BigTitle";

const TITLE = "Partidos";

const { container, card, shadowCard1, shadowCard2, containerCard } = Styles;

const Partidos = () => {
  return (
    <HeaderLayout title={TITLE}>
      <h2>Ananias</h2>
      <h3>Quevedo</h3>
      <BigTitle type="secondary" title={TITLE} />
      <span>4</span>
      <div className={container}>
        <div className={containerCard}>
          <div className={shadowCard2} />
          <div className={shadowCard1} />
          <div className={card}>CARD</div>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default Partidos;
