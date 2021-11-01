import Styles from "./_style.module.scss";
import HeaderLayout from "../../components/layouts/HeaderLayout";
import BigTitle from "../../components/atoms/big-title/BigTitle";
import Card from "../../components/atoms/card/Card.jsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { imageMotion, titleMotion, buttonMotion } from "../../utils/constants";
import PlayerCard from "../../components/molecules/player-card/PlayerCard";
import HomeCards from "../../components/organisms/home-cards/HomeCards";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { CREAR_PARTIDO_URL, goTo } from "../../utils/routes";

const TITLE = "Partidos";
const { tablero } = Styles;

const Partidos = () => {
  const router = useRouter();

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
      <HomeCards />
    </HeaderLayout>
  );
};

export default Partidos;
