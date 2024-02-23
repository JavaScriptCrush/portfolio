import "./contact.scss";
import { IoHome } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
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

function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.div className="aadress" initial="initial" animate="animate">
            <motion.span initial="initial" animate="animate">
              <IoHome className="home" />
            </motion.span>
            <motion.p initial="initial" animate="animate">
              House No. # 22, Mark Avenue, Punjab
            </motion.p>
          </motion.div>
          <motion.div initial="initial" animate="animate">
            <motion.span initial="initial" animate="animate">
              <FaPhoneVolume className="phone"/>
            </motion.span>
            <motion.p initial="initial" animate="animate">
              +91 9800000001
            </motion.p>
          </motion.div>
          <motion.div initial="initial" animate="animate">
            <motion.span initial="initial" animate="animate">
              <IoMail className="mail" />
            </motion.span>
            <motion.p initial="initial" animate="animate">
              info@skportfolio.com
            </motion.p>
          </motion.div>
        </motion.div>
        <div className="formContainer">
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <textarea
            name="message"
            id="message"
            rows="5"
            cols="30"
            placeholder="Message"
          />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
