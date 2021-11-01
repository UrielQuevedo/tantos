export const titleMotion = {
  initial: { opacity: 0, x: 0, y: -20 },
  animate: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: -20 },
  tansition: { duration: 0.4, type: "easeInOut" },
};

export const imageMotion = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, transition: { duration: 0 } },
  transition: { duration: 1 },
};

export const containerMotion = {
  initial: { opacity: 0, x: 500 },
  exit: { opacity: 0, x: 500, transition: { duration: 0.3 } },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4 },
};

export const buttonMotion = {
  initial: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};
