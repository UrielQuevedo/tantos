import Styles from "./_style.module.scss";
import BigTitle from "../../components/atoms/big-title/BigTitle";
import CrearJugadorForm from "../../components/organisms/crear-usuario/CrearJugadorForm";
import { motion } from "framer-motion";
import HeaderLayout from "../../components/layouts/HeaderLayout";

const TITLE = "Crear Jugador";

const { container } = Styles;

const CrearUsuario = () => {
  return (
    <HeaderLayout title={TITLE}>
      <motion.div
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -500, transition: { duration: 0.5 } }}
        transition={{ duration: 1, type: "spring" }}
        style={{ textAlign: "center" }}
      >
        <BigTitle type="primary" title={TITLE} />
      </motion.div>
      <motion.div
        className={container}
        initial={{ opacity: 0, y: 500 }}
        exit={{ opacity: 0, y: 500, transition: { duration: 0.5 } }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CrearJugadorForm />
      </motion.div>
    </HeaderLayout>
  );
};

export default CrearUsuario;
