import PlanillaInput from "../../atoms/planilla-input/PlanillaInput";
import { crearUsuarioInputs } from "../../../utils/forms/crear-jugador";
import Styles from "./_style.module.scss";

const CrearUsuarioForm = () => {
  return crearUsuarioInputs.map((inputProps, key) => (
    <PlanillaInput key={key} {...inputProps} />
  ));
};

export default CrearUsuarioForm;
