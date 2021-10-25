import Styles from "./_style.module.scss";
import { motion } from "framer-motion";
import { tabVariants } from "../../../utils/motions/tab";

const { titleSelected, selected } = Styles;

const TabSection = ({ tabs, tabSelected, setTabSelected }) => {
  return tabs.map((title, tabIndex) => {
    const isSelected = tabIndex === tabSelected;
    return (
      <h1
        key={tabIndex}
        className={isSelected ? titleSelected : ""}
        onClick={() => setTabSelected(tabIndex)}
      >
        {title}
        <motion.div
          animate={isSelected ? "open" : "close"}
          className={isSelected ? selected : ""}
          variants={tabVariants}
        />
      </h1>
    );
  });
};

export default TabSection;
