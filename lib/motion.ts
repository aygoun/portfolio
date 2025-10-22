export const fadeInUp = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

export const staggerContainer = (stagger: number = 0.08) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger },
  },
});
