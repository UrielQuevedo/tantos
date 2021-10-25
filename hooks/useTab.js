import { useState } from "react";

export const useTab = (defaultTab = 0) => {
  const [tabSelected, setTabSelected] = useState(defaultTab);

  return { tabSelected, setTabSelected };
};
