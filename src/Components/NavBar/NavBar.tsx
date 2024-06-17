import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navContainer">
      <div className="navLeft">
        <NavLink to="/">
          <img
            src="https://cdn.pixabay.com/photo/2016/04/24/14/36/youtube-1349702_1280.png"
            alt="youtubelogo"
            className="youtubeLogo"
          />
        </NavLink>
      </div>
      <div className="navMiddle">
        <input type="text" placeholder="search" className="input" />
      </div>
    </nav>
  );
};

export default NavBar;
