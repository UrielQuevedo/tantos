import CustomButton from "../../components/atoms/custom-button/CustomButton";

const CrearUsuario = () => {
  return (
    <div>
      <div className="container">
        <div className="center">
          <span className="title">Crear Jugador</span>
          <span className="title">Completar</span>
        </div>
        <div>Nombre</div>
        <div>Apellido</div>
        <div>Club</div>
        <img
          alt="Imagen de fondo"
          src="/crearUsuario.png"
          className="imageBackground"
          width={324}
          height={512}
        />
      </div>
      <div className="footer">
        <CustomButton text="crear" theme="confirm" />
      </div>
    </div>
  );
};

export default CrearUsuario;
