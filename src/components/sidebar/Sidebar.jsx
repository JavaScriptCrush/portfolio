import { useState } from "react";
import "./sidebar.scss";
import { CgMenu } from "react-icons/cg";
import { Link } from "react-router-dom";

function Sidebar() {
  const [toggle,setToggle] = useState(false);
  const handleClick = () => {
      setToggle(prev=>!prev);
  }
  return (
    <div className="sidebar">
        <CgMenu onClick={handleClick} className="toggleButton"/>
      <div className={toggle ? "links" : "hide"}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Sidebar;
