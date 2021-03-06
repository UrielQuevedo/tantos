import { PARTIDOS_MOCKUP } from "../../../__mockup/partidos.js";
import PartidoCard from "../partido-card/PartidoCard.jsx";
import ShowCards from "../../organisms/show-cards/ShowCards.jsx";
import { CREAR_PARTIDO_URL, goTo } from "../../../utils/routes.js";
import { useRouter } from "next/router";

const INFO_TEXT = "En esta sección podra ver los últimos partidos jugados.";

const PartidosCard = () => {
  const router = useRouter();

  return (
    <ShowCards
      ItemCard={PartidoCard}
      items={PARTIDOS_MOCKUP}
      infoText={INFO_TEXT}
      onClickButton={() => goTo(CREAR_PARTIDO_URL, router)}
      notContentText="partidos creados"
      textButton="crear partido"
    />
  );
};

export default PartidosCard;
