import PartidoCard from "../partido-card/PartidoCard.jsx";
import ShowCards from "../../organisms/show-cards/ShowCards.jsx";
import { CREAR_PARTIDO_URL, goTo } from "../../../utils/routes.js";
import { useRouter } from "next/router";

const INFO_TEXT = "En esta sección podra ver los proximos partidos a jugar.";

const FechasHomeCard = () => {
  const router = useRouter();

  return (
    <ShowCards
      ItemCard={PartidoCard}
      items={[]}
      infoText={INFO_TEXT}
      onClickButton={() => goTo(CREAR_PARTIDO_URL, router)}
      notContentText="fechas creadas"
      textButton="crear fecha"
    />
  );
};

export default FechasHomeCard;
