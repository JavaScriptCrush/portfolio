import "./about.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};
function About() {
  const navigate = useNavigate();
  return (
    <div className="about">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants }
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants }>About Me</motion.h2>
          <motion.p variants={ textVariants }>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
            officiis odit, ab cumque exercitationem libero quam necessitatibus
            atque quisquam, nostrum reiciendis rem! Mollitia nobis incidunt
            molestias magnam eaque amet repellendus ducimus assumenda expedita
            quas corrupti deserunt esse labore molestiae, illum ad facilis? Est
            laboriosam, qui dolor, fuga ex ducimus officiis fugit laborum magni
            veniam magnam earum, ea nostrum quisquam officia rerum provident?
            Blanditiis reiciendis soluta in modi reprehenderit cupiditate ipsam
            sed sint facilis suscipit facere minus, dolorem temporibus? Ex,
            consequatur.
          </motion.p>
          <motion.button
            variants={ textVariants }
            onClick={() => navigate("/")}
          >
            Home Page
          </motion.button>
        </motion.div>
        <div className="imageContainer">
          <img src="/about.jpg" alt="about" />
        </div>
      </div>
    </div>
  );
}

export default About;
