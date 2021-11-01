import PlanillaInput from "../../atoms/planilla-input/PlanillaInput";
import Styles from "./_style.module.scss";
import { crearPartidoInputs } from "../../../utils/forms/crear-partido";
import { CREAR_PARTIDO_URL } from "../../../utils/routes";
import Link from "next/link";

const { gif } = Styles;

const CrearPartidoForm = () => {
  return (
    <>
      {crearPartidoInputs.map((inputProps, key) => (
        <PlanillaInput key={key} {...inputProps} />
      ))}
      <img
        className={gif}
        alt="gif"
        src="https://c.tenor.com/rD0H2xM0p9gAAAAj/dribble-basketball.gif"
      />
    </>
  );
};

export default CrearPartidoForm;
