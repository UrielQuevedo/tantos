import PlantillaLayoutForm from "../../components/layouts/plantilla-form-layout/PlantillaFormLayout";
import { CREAR_PARTIDO_URL } from "../../utils/routes";

const TITLE = "Cuartos";

const Tiempos = () => {
  return (
    <PlantillaLayoutForm redirect={CREAR_PARTIDO_URL} title={TITLE}>
      <h1>{TITLE}</h1>
    </PlantillaLayoutForm>
  );
};

export default Tiempos;
