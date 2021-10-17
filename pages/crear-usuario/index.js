import Styles from "./_style.module.scss";
import BigTitle from "components/atoms/big-title/BigTitle";
import CrearJugadorForm from "../../components/organisms/crear-usuario/CrearJugadorForm";

const TITLE = "Crear Jugador";

const { container } = Styles;

const CrearUsuario = () => {
  return (
    <>
      <BigTitle title={TITLE} />
      <div className={container}>
        <CrearJugadorForm />
      </div>
    </>
  );
};

export default CrearUsuario;
