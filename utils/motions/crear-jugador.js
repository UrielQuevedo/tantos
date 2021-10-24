export const titleMotion = {
  initial: { opacity: 0, y: -500 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -500, transition: { duration: 0.5 } },
  transition: { duration: 1, type: "spring" },
};

export const containerMotion = {
  initial: { opacity: 0, y: 500 },
  exit: { opacity: 0, y: 500, transition: { duration: 0.5 } },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};
