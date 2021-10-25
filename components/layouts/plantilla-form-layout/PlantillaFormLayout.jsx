import Styles from "./_style.module.scss";
import { motion } from "framer-motion";
import {
  containerMotion,
  titleMotion,
} from "../../../utils/motions/crear-jugador";
import HeaderLayout from "../HeaderLayout";
import BigTitle from "../../atoms/big-title/BigTitle";
import { LeftOutlined } from "@ant-design/icons";
import { goTo } from "../../../utils/routes";
import { useRouter } from "next/router";

const { container, titleContainer, iconBack } = Styles;

const PlantillaLayoutForm = ({ title, redirect, children }) => {
  const router = useRouter();

  const goIf = () => {
    if (redirect) {
      goTo(redirect, router);
    }
  };

  return (
    <HeaderLayout title={title}>
      <motion.div {...titleMotion} className={titleContainer} onClick={goIf}>
        {redirect && (
          <div className={iconBack}>
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.49999 15H5.49999L-8.58307e-06 7L5.49999 0H8.49999L2.99999 7L8.49999 15Z"
                fill="white"
              />
            </svg>
          </div>
        )}

        <BigTitle type="primary" title={title} />
      </motion.div>
      <motion.div className={container} {...containerMotion}>
        {children}
      </motion.div>
    </HeaderLayout>
  );
};

export default PlantillaLayoutForm;
