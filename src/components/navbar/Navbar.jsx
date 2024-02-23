import { Link } from "react-router-dom";
import "./navbar.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span onClick={()=>navigate("/")}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
            SANDEEP
        </motion.span>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
