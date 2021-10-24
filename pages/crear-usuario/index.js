import CrearJugadorForm from "../../components/organisms/crear-usuario/CrearJugadorForm";
import PlantillaLayoutForm from "../../components/layouts/plantilla-form-layout/PlantillaFormLayout.jsx";

const TITLE = "Crear Jugador";

const CrearUsuario = () => {
  return (
    <PlantillaLayoutForm title={TITLE}>
      <CrearJugadorForm />
    </PlantillaLayoutForm>
  );
};

export default CrearUsuario;
