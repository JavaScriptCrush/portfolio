import "./hero.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
      staggerChildren: 0.2,
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

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1>Sandeep Sharma</motion.h1>
          <motion.h4>Front End Developer</motion.h4>
          <motion.p>
            Hi, Welcome to my profile,i love to code in standard Html,Css and
            JavaScript,I develope SEO friendly websites using latest principles
            and techniques.To find out more about what i can do for you please
            visit my portfolio
          </motion.p>
          <button onClick={()=>navigate("/portfolio")}>Visit Portfolio</button>
        </motion.div>
        <div className="imageContainer">
          <img src="/author.png" alt="author" />
        </div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Fron End Developer
      </motion.div>
    </div>
  );
}

export default Hero;
