import Styles from "./_style.module.scss";
import { Input, Form } from "antd";

const { labelInput, inputForm } = Styles;

const PlanillaInput = ({ name, placeholder, type, required }) => {
  return (
    <Form.Item
      name={name}
      required={false}
      label={<label className={labelInput}> {name} </label>}
      rules={[{ required }]}
    >
      <Input
        placeholder={placeholder}
        className={inputForm}
        type={type}
        required={required}
      />
    </Form.Item>
  );
};

export default PlanillaInput;
