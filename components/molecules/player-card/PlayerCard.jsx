import Styles from "./_style.module.scss";
import Tanto from "../../atoms/tanto/Tanto";
import { goTo, JUGADOR_URL } from "../../../utils/routes";
import { useRouter } from "next/router";

const { playerCard, name, lastname, club } = Styles;

const PlayerCard = () => {
  const router = useRouter();
  return (
    <div className={playerCard} onClick={() => goTo(JUGADOR_URL, router)}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2 className={name}>Ananias</h2>
          <span className={lastname}>Quevedo</span>
        </div>
        <div style={{ marginRight: "10px", marginBottom: "15px" }}>
          <svg
            width="9"
            height="17"
            viewBox="0 0 9 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L7 8.5L1 16" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          bottom: "1.4rem",
        }}
      >
        <div className={club}>Mate club</div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Tanto tanto={10} text="ganados" theme="win" />
          <Tanto tanto={2} text="perdidos" theme="loss" />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
