import Styles from "./_style.module.scss";
import HeaderLayout from "../../components/layouts/HeaderLayout";
import BigTitle from "../../components/atoms/big-title/BigTitle";
import Card from "../../components/atoms/card/Card.jsx";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  containerMotion,
  imageMotion,
  titleMotion,
} from "../../utils/constants";
import PlayerCard from "../../components/molecules/player-card/PlayerCard";
import PartidosCard from "../../components/molecules/partidos-card/PartidosCard";
import { PARTIDOS_MOCKUP } from "../../__mockup/partidos.js";

const TITLE = "Partidos";
const { container, tablero, titleContainer } = Styles;

const Partidos = () => {
  const [partidos, setPartidos] = useState([...PARTIDOS_MOCKUP]);

  return (
    <HeaderLayout title={TITLE}>
      <motion.section {...titleMotion}>
        <PlayerCard />
        <motion.img
          src="./tablero.png"
          className={tablero}
          alt="tablero de basquet"
          {...imageMotion}
        />
      </motion.section>
      <motion.section className={container} {...containerMotion}>
        <PartidosCard partidos={partidos} />
      </motion.section>
    </HeaderLayout>
  );
};

export default Partidos;
