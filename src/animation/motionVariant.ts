
export const fadeUpVariants = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        delay,
        damping: 30,
        mass: 0.5,
        staggerChildren: 0.03,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
    },
  });