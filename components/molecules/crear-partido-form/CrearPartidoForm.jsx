import PlanillaInput from "../../atoms/planilla-input/PlanillaInput";
import { crearPartidoInputs } from "../../../utils/forms/crear-partido";
import Styles from "./_style.module.scss";
import { useEffect, useState } from "react";

const CrearPartidoForm = () => {
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setShowGif(false);
    }, 2200);

    setTimeout(function () {
      setShowGif(true);
    }, 1000);
  }, []);

  return (
    <>
      {crearPartidoInputs.map((inputProps, key) => (
        <PlanillaInput key={key} {...inputProps} />
      ))}
      {showGif && (
        <img
          src="https://c.tenor.com/iLYPmFMHM_0AAAAi/dunk-de-rozan.gif"
          alt="gif de volcada"
          style={{ position: "absolute" }}
        />
      )}
    </>
  );
  return crearPartidoInputs.map((inputProps, key) => (
    <PlanillaInput key={key} {...inputProps} />
  ));
};

export default CrearPartidoForm;
