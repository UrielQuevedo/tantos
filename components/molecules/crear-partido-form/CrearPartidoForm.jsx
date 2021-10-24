import PlanillaInput from "../../atoms/planilla-input/PlanillaInput";
import { crearPartidoInputs } from "../../../utils/forms/crear-partido";
import Styles from "./_style.module.scss";

const CrearPartidoForm = () => {
  return crearPartidoInputs.map((inputProps, key) => (
    <PlanillaInput key={key} {...inputProps} />
  ));
};

export default CrearPartidoForm;
