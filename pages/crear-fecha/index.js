import PlantillaLayoutForm from "../../components/layouts/plantilla-form-layout/PlantillaFormLayout";
import { PARTIDOS_URL } from "../../utils/routes";

const TITLE = "Crear Fecha";

const CrearFecha = () => {
  return (
    <PlantillaLayoutForm redirect={PARTIDOS_URL} title={TITLE}>
      <h1>{TITLE}</h1>
    </PlantillaLayoutForm>
  );
};

export default CrearFecha;
