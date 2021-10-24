import Styles from "./_style.module.scss";
import CustomButton from "../../atoms/custom-button/CustomButton";
import PlanillaForm from "../../molecules/planilla-form/PlanillaForm";
import Planilla from "../../molecules/planilla/Planilla";
import { Form } from "antd";
import { useRouter } from "next/router";
import { PARTIDOS_URL } from "../../../utils/routes";

const { center } = Styles;

const CrearJugadorForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = (values) => {
    //TODO: Guardar datos
    console.log(values);
    router.push(PARTIDOS_URL);
    form.resetFields();
  };

  return (
    <div className={center}>
      <Form
        autoComplete="off"
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Planilla>
          <PlanillaForm />
        </Planilla>
        <CustomButton text="inscribir" theme="confirm" htmlType="submit" />
      </Form>
    </div>
  );
};

export default CrearJugadorForm;
