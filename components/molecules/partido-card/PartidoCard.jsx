import Styles from "./_style.module.scss";
import Card from "../../atoms/card/Card";
import classNames from "classnames";

const {
  tantos,
  clubName,
  gameDate,
  container,
  containerTantos,
  dividerName,
  dividerTantos,
  divider,
  containerStats,
} = Styles;

const PartidoCard = ({ club, rival, status, fecha, id }) => {
  return (
    <Card>
      <div className={container}>
        <div style={{ width: "100%" }}>
          <span className={clubName}>{club.nombre}</span>
          <span className={dividerName}>vs</span>
          <span className={clubName}>{rival.nombre}</span>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div className={containerTantos}>
              <span className={classNames(tantos, Styles[status])}>
                {club.tantos}
              </span>
              <span className={dividerTantos}>:</span>
              <span className={classNames(tantos, Styles[status])}>
                {rival.tantos}
              </span>
            </div>
            <div className={gameDate}>{fecha}</div>
          </div>
          <div className={divider} />
          <div className={containerStats}>
            <span>30 - T</span>
            <span>30 - PT</span>
            <span>30 - PT</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PartidoCard;
