import Styles from "./_style.module.scss";
import TabSection from "../../atoms/tab/TabSection";
import { useTab } from "../../../hooks/useTab";
import PartidosCard from "../../molecules/partidos-card/PartidosCard";
import { motion } from "framer-motion";
import { containerMotion } from "../../../utils/constants.js";
import FechasHomeCard from "../../molecules/fechas-home-cards/FechasHomeCard";

const { titleContainer, container } = Styles;

const TABS = ["Partidos", "Fechas"];

const HomeCards = () => {
  const { tabSelected, setTabSelected } = useTab();

  const getTabContent = () => {
    switch (tabSelected) {
      case 0:
        return <PartidosCard />;
      case 1:
        return <FechasHomeCard />;
      default:
        console.log("No hay tab");
    }
  };

  return (
    <motion.div className={container} {...containerMotion}>
      <div className={titleContainer}>
        <TabSection
          tabs={TABS}
          tabSelected={tabSelected}
          setTabSelected={setTabSelected}
        />
      </div>
      {getTabContent()}
    </motion.div>
  );
};

export default HomeCards;
