import Styles from "./_style.module.scss";

const { text } = Styles;

const InfoAlert = ({ infoText }) => <p className={text}>{infoText}</p>;

export default InfoAlert;
