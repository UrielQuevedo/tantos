import { motion } from "framer-motion";
import AddButton from "../../atoms/add-button/AddButton";
import NotContent from "../../atoms/not-content/NotContent";
import HomeAlert from "../../molecules/home-alert/HomeAlert";

const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const element = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0 },
};

const ShowCards = ({
  notContentText,
  infoText,
  onClickButton,
  items,
  ItemCard,
  textButton,
}) => {
  if (items.length === 0) {
    return (
      <HomeAlert
        notContentText={notContentText}
        infoText={infoText}
        onClick={onClickButton}
        textButton={textButton}
      />
    );
  }

  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={list}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={element}
            style={{ marginBottom: "22px" }}
          >
            <ItemCard {...item} id={i} />
          </motion.div>
        ))}
      </motion.div>
      <AddButton onClick={onClickButton} />
    </>
  );
};

export default ShowCards;
