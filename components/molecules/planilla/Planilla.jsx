import Styles from "./_style.module.scss";

const {
  formulario,
  pisador,
  circulo,
  hueco,
  adorno,
  containerForm,
  doblado1,
  doblado2,
  dobladoComplicado1,
  dobladoComplicado2,
  dobladoComplicado3,
  dobladoSimple1,
  dobladoSimple2,
} = Styles;

const Planilla = ({ children }) => {
  return (
    <div className={formulario}>
      <div className={doblado2} />
      <div className={doblado1} />

      <div className={dobladoComplicado1} />
      <div className={dobladoComplicado2} />
      <div className={dobladoComplicado3} />

      <div className={dobladoSimple1} />
      <div className={dobladoSimple2} />

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
