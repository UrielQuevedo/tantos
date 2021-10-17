import Styles from "./_style.module.scss";
import BigTitle from "components/atoms/big-title/BigTitle";
import CrearJugadorForm from "../../components/organisms/crear-usuario/CrearJugadorForm";
import HeaderLayout from "components/layouts/HeaderLayout";

const TITLE = "Crear Jugador";

const { container } = Styles;

const CrearUsuario = () => {
  return (
    <HeaderLayout title={TITLE}>
      <BigTitle title={TITLE} />
      <div className={container}>
        <CrearJugadorForm />
      </div>
    </HeaderLayout>
  );
};

export default CrearUsuario;
