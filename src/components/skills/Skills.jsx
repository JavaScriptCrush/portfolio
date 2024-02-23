import "./skills.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1
    }
  }
}

function Skills() {
  return (
    <div className="skills">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Technical Skills</motion.h2>
          <motion.ul variants={textVariants}>
            <li>Html & Css</li>
            <li>JavaScript</li>
            <li>React Js</li>
            <li>Node Js</li>
            <li>Express Js</li>
            <li>MongoDB</li>
          </motion.ul>
        </motion.div>
        <div className="imageContainer">
          <img src="/skills.jpg" alt="skills" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
