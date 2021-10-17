import { useEffect } from "react";
import CrearJugador from "./crear-usuario/index.js";

const Home = () => {
  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user);
  }, []);

  return <CrearJugador />;
};

export default Home;
