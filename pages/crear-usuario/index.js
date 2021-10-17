import CustomButton from "../../components/atoms/custom-button/CustomButton";
import { Button, Input } from "antd";

const CrearUsuario = () => {
  return (
    <>
      <h1 className="title">Crear Jugador</h1>
      <div className="container">
        <div className="center">
          <div className="formulario">
            <div className="pisador">
              <div className="circulo" />
              <div className="hueco" />
              <div className="adorno" />
            </div>
            <div className="container-form">
              <label> Nombre </label>
              <Input placeholder="Ej: ricardo..." className="inputForm" />
              <label> Apellido </label>
              <Input placeholder="Ej: fort..." className="inputForm" />
              <label> Club </label>
              <Input placeholder="Ej: barcelona..." className="inputForm" />
              <label> Nro de camiseta </label>
              <Input placeholder="Ej: 14..." className="inputForm" />
            </div>
          </div>
          <CustomButton text="crear" theme="confirm" />
        </div>
      </div>
    </>
  );
};

export default CrearUsuario;
