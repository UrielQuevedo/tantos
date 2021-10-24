import Styles from "./_style.module.scss";
import CustomButton from "../../atoms/custom-button/CustomButton";
import Planilla from "../../molecules/planilla/Planilla";
import { Form } from "antd";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const { center } = Styles;

const PlanillaForm = ({ textButton, onFinish, formLayout }) => {
  const [form] = Form.useForm();
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setShowGif(false);
    }, 2200);

    setTimeout(function () {
      setShowGif(true);
    }, 1200);
  }, []);

  return (
    <div className={center}>
      <Form
        autoComplete="off"
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Planilla>
          {formLayout}
          {showGif && (
            <motion.img
              src="https://c.tenor.com/iLYPmFMHM_0AAAAi/dunk-de-rozan.gif"
              style={{ position: "absolute" }}
            />
          )}
        </Planilla>
        <CustomButton text={textButton} theme="confirm" htmlType="submit" />
      </Form>
    </div>
  );
};

export default PlanillaForm;
