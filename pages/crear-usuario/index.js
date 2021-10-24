import Styles from "./_style.module.scss";
import BigTitle from "../../components/atoms/big-title/BigTitle";
import CrearJugadorForm from "../../components/organisms/crear-usuario/CrearJugadorForm";
import { motion } from "framer-motion";
import HeaderLayout from "../../components/layouts/HeaderLayout";
import {
  containerMotion,
  titleMotion,
} from "../../utils/motions/crear-jugador";

const TITLE = "Crear Jugador";

const { container, titleContainer } = Styles;

const CrearUsuario = () => {
  return (
    <HeaderLayout title={TITLE}>
      <motion.div {...titleMotion} className={titleContainer}>
        <BigTitle type="primary" title={TITLE} />
      </motion.div>
      <motion.div className={container} {...containerMotion}>
        <CrearJugadorForm />
      </motion.div>
    </HeaderLayout>
  );
};

export default CrearUsuario;
