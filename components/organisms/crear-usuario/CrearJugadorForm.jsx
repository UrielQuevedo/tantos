import Styles from "./_style.module.scss";
import CustomButton from "../../atoms/custom-button/CustomButton";
import PlanillaForm from "../../molecules/planilla-form/PlanillaForm";
import Planilla from "../../molecules/planilla/Planilla";
import { Form } from "antd";
import { RightOutlined } from "@ant-design/icons";

const { center } = Styles;

const CrearJugadorForm = () => {
  //TODO: Hacer responsive como si fuera un zoom de 150%
  //TODO: Acomodar los temas de scss

  const [form] = Form.useForm();

  const onFinish = (values) => {
    //TODO: Guardar datos
    //TODO: Redirigir a partidos
    console.log(values);
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
        <CustomButton
          icon={<RightOutlined />}
          text="crear"
          theme="confirm"
          htmlType="submit"
        />
      </Form>
    </div>
  );
};

export default CrearJugadorForm;
