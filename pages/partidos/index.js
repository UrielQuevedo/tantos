import Styles from "./_style.module.scss";
import HeaderLayout from "../../components/layouts/HeaderLayout";
import BigTitle from "../../components/atoms/big-title/BigTitle";
import Card from "../../components/atoms/card/Card.jsx";
import { motion } from "framer-motion";

const TITLE = "Partidos";

const { container, name, lastname, cantidad, titleContainer, tablero } = Styles;
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
        style={{ padding: "10px 0 0 30px" }}
      >
        <h2 className={name}>Ananias</h2>
        <span className={lastname}>Quevedo</span>
        <div className={titleContainer}>
          <BigTitle type="secondary" title={TITLE} />
          <span className={cantidad}>(0)</span>
        </div>
        <motion.img
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0, type: "spring" }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          transition={{ duration: 1 }}
          src="./tablero.png"
          className={tablero}
          alt="tablero de basquet"
        />
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
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 1, type: "easeInOut" }}
        >
          <Card>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "#928787",
                  border: "3px dashed #eae7e7",
                  padding: "25px 65px",
                  borderRadius: "10px",
                }}
              >
                + <span style={{ fontSize: "13px" }}>Agregar Partido</span>
              </h3>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </HeaderLayout>
  );
};

export default Partidos;
