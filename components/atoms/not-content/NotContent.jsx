import Styles from "./_style.module.scss";

const { container } = Styles;

const NotContent = ({ text }) => {
  return (
    <div className={container}>
      <h1>Ops!</h1>
      <h2>No hay {text}.</h2>
    </div>
  );
};

export default NotContent;
