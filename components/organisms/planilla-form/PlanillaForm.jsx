import Styles from "./_style.module.scss";
import CustomButton from "../../atoms/custom-button/CustomButton";
import Planilla from "../../molecules/planilla/Planilla";
import { Form } from "antd";

const { center } = Styles;

const PlanillaForm = ({ textButton, onFinish, formLayout }) => {
  const [form] = Form.useForm();

  return (
    <div className={center}>
      <Form
        autoComplete="off"
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Planilla>{formLayout}</Planilla>
        <CustomButton text={textButton} theme="confirm" htmlType="submit" />
      </Form>
    </div>
  );
};

export default PlanillaForm;
