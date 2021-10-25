import Styles from "./_style.module.scss";
import classNames from "classnames";
import Card from "../../atoms/card/Card";
import { useEffect, useRef } from "react";
import TabSection from "../../atoms/tab/TabSection";
import { useTab } from "../../../hooks/useTab";

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
} = Styles;

const TABS = ["Partidos", "Fechas"];

const PartidosCard = ({ partidos }) => {
  const { tabSelected, setTabSelected } = useTab();

  const getTabContent = () => {
    switch (tabSelected) {
      case 0:
        console.log("Oranges are $0.59 a pound.");
        break;
      case 1:
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
      default:
        console.log("No hay tab");
    }
  };

  return (
    <>
      <div className={titleContainer}>
        <TabSection
          tabs={TABS}
          tabSelected={tabSelected}
          setTabSelected={setTabSelected}
        />
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
