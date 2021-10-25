import { useState, useEffect } from "react";
import Styles from "./_style.module.scss";

const { titleSelected, selected } = Styles;

const TabSection = ({ title, tabIndex, isSelected, setTab }) => {
  return (
    <h1
      className={isSelected ? titleSelected : ""}
      onClick={() => setTab(tabIndex)}
    >
      {title} <div className={isSelected ? selected : ""} />
    </h1>
  );
};

export default TabSection;
