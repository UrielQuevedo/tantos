import Styles from "./_style.module.scss";
import CustomButton from "../../atoms/custom-button/CustomButton";
import NotContent from "../../atoms/not-content/NotContent";
import InfoAlert from "../../atoms/info-alert/InfoAlert";
import { motion } from "framer-motion";
import { contentMotion } from "../../../utils/motions/partidos";

const { container, mt25, w8, buttonContainer } = Styles;

const HomeAlert = ({ notContentText, infoText, onClick, textButton }) => {
  return (
    <motion.div {...contentMotion}>
      <div className={container}>
        <NotContent text={notContentText} />
        <div className={mt25}>
          <InfoAlert infoText={infoText} />
        </div>
      </div>
      <div className={buttonContainer}>
        <div className={w8}>
          <CustomButton text={textButton} theme="confirm" onClick={onClick} />
        </div>
      </div>
    </motion.div>
  );
};

export default HomeAlert;
