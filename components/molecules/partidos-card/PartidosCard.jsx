import Styles from "./_style.module.scss";
import classNames from "classnames";
import Card from "../../atoms/card/Card";

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

const PartidosCard = ({ partidos }) => {
  return partidos.map(({ club, rival, status, fecha }, i) => (
    <div key={i} style={{ marginBottom: "22px" }}>
      <Card>
        <div className={container}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <span className={clubName}>{club.nombre}</span>
              <span className={dividerName}>vs</span>
              <span className={clubName}>{rival.nombre}</span>
            </div>
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
      </Card>
    </div>
  ));
};

export default PartidosCard;
