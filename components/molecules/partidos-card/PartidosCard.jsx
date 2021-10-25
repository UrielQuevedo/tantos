import Styles from "./_style.module.scss";
import classNames from "classnames";
import Card from "../../atoms/card/Card";
import { useState } from "react";
import TabSection from "../../atoms/tab/TabSection";

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
  titleContainer,
  titleSelected,
  selected,
} = Styles;

const PartidosCard = ({ partidos }) => {
  const [tab, setTab] = useState(0);
  const TABS = ["Partidos", "Fechas"];

  return (
    <>
      <div className={titleContainer}>
        {TABS.map((title, i) => (
          <TabSection
            key={i}
            title={title}
            tabIndex={i}
            isSelected={tab === i}
            setTab={setTab}
          />
        ))}
      </div>
      {partidos.map(({ club, rival, status, fecha }, i) => (
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
      ))}
    </>
  );
};

export default PartidosCard;
