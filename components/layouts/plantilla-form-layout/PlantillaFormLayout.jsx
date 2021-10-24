import Styles from "./_style.module.scss";
import { motion } from "framer-motion";
import {
  containerMotion,
  titleMotion,
} from "../../../utils/motions/crear-jugador";
import HeaderLayout from "../HeaderLayout";
import BigTitle from "../../atoms/big-title/BigTitle";

const { container, titleContainer } = Styles;

const PlantillaLayoutForm = ({ title, children }) => {
  return (
    <HeaderLayout title={title}>
      <motion.div {...titleMotion} className={titleContainer}>
        <BigTitle type="primary" title={title} />
      </motion.div>
      <motion.div className={container} {...containerMotion}>
        {children}
      </motion.div>
    </HeaderLayout>
  );
};

export default PlantillaLayoutForm;
