import Styles from "./_style.module.scss";
import HeaderLayout from "../../components/layouts/HeaderLayout";
import BigTitle from "../../components/atoms/big-title/BigTitle";
import Card from "../../components/atoms/card/Card.jsx";
import { motion } from "framer-motion";

const TITLE = "Partidos";

const { container } = Styles;
const variants = {
  hidden: { opacity: 0, x: 0, y: -20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: -20 },
};

const Partidos = () => {
  return (
    <HeaderLayout title={TITLE}>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: "easeInOut" }}
      >
        <h2>Nombre</h2>
        <h3>Apellido</h3>
        <BigTitle type="secondary" title={TITLE} />
      </motion.div>
      <motion.div
        className={container}
        initial={{ opacity: 0, x: 500 }}
        exit={{
          opacity: 0,
          x: 500,
          transition: { duration: 0.3 },
        }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card>CARD</Card>
      </motion.div>
    </HeaderLayout>
  );
};

export default Partidos;
