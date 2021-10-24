import PlantillaLayoutForm from "../../components/layouts/plantilla-form-layout/PlantillaFormLayout.jsx";
import PlanillaForm from "../../components/organisms/planilla-form/PlanillaForm";
import CrearPartidoForm from "../../components/molecules/crear-partido-form/CrearPartidoForm";
import { useRouter } from "next/router";
import { goTo, PARTIDOS_URL } from "../../utils/routes";
const TITLE = "Crear Partido";

const CrearPartido = () => {
  const router = useRouter();

  const handleOk = (values) => {
    //TODO: Guardar datos
    console.log(values);
    goTo(PARTIDOS_URL, router);
    form.resetFields();
  };

  return (
    <PlantillaLayoutForm title={TITLE}>
      <PlanillaForm
        textButton="continuar"
        onFinish={handleOk}
        formLayout={<CrearPartidoForm />}
      />
    </PlantillaLayoutForm>
  );
};

export default CrearPartido;
