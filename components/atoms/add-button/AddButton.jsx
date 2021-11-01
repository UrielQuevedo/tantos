import Styles from "./_style.module.scss";
import { motion } from "framer-motion";
import { buttonMotion } from "../../../utils/constants";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { addButton } = Styles;

const AddButton = ({ onClick }) => {
  return (
    <motion.div {...buttonMotion}>
      <Button
        type="dashed"
        shape="circle"
        icon={<PlusOutlined />}
        className={addButton}
        onClick={onClick}
      />
    </motion.div>
  );
};

export default AddButton;
