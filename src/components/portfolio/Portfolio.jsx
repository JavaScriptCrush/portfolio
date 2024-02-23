import "./portfolio.scss";
import { motion } from "framer-motion";

const textVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="wrapper">
        <motion.div
          className="rowOne"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.div className="col1" variants={textVariant}>
            <motion.h2 variants={textVariant}>React App</motion.h2>
            <motion.img
              src="/reactApp.jpg"
              alt="reactApp"
              variants={textVariant}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          <motion.div className="col2" variants={textVariant}>
            <motion.h2 variants={textVariant}>JavaScript App</motion.h2>
            <motion.img
              src="/jsApp.jpg"
              alt="jsApp"
              variants={textVariant}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="rowTwo"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.div className="col1" variants={textVariant}>
            <motion.h2 variants={textVariant}>Next App</motion.h2>
            <motion.img
              src="/nextApp.jpg"
              alt="nextApp"
              variants={textVariant}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          <motion.div className="col2" variants={textVariant}>
            <motion.h2 variants={textVariant}>MERN App</motion.h2>
            <motion.img
              src="/mernApp.jpg"
              alt="mernApp"
              variants={textVariant}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Portfolio;
