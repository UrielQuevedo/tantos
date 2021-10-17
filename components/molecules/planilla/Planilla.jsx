import Styles from "./_style.module.scss";

const { formulario, pisador, circulo, hueco, adorno, containerForm } = Styles;

const Planilla = ({ children }) => {
  return (
    <div className={formulario}>
      <div className={pisador}>
        <div className={circulo} />
        <div className={hueco} />
        <div className={adorno} />
      </div>
      <div className={containerForm}>{children}</div>
    </div>
  );
};

export default Planilla;
