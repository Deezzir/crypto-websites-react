import { motion } from "framer-motion";

export const AppearWrapper = (props: any) => {
  return (
    <motion.div
      className={props.customClass + " flex flex-col p-2"}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 3,
      }}
      viewport={{ once: true }}
    >
      {props.children}
    </motion.div>
  );
};
