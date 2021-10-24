import PlantillaLayoutForm from "../../components/layouts/plantilla-form-layout/PlantillaFormLayout.jsx";
import PlanillaForm from "../../components/organisms/planilla-form/PlanillaForm";
import CrearUsuarioForm from "../../components/molecules/crear-usuario-form/CrearUsuarioForm";
import { useRouter } from "next/router";
import { goTo, PARTIDOS_URL } from "../../utils/routes";

const TITLE = "Crear Jugador";

const CrearUsuario = () => {
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
        textButton="inscribir"
        onFinish={handleOk}
        formLayout={<CrearUsuarioForm />}
      />
    </PlantillaLayoutForm>
  );
};

export default CrearUsuario;
