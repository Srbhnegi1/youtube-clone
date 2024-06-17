import "./SideBar.css";
import {
  IoIosHome,
  IoLogoGameControllerB,
  IoIosCar,
  IoIosBaseball,
  IoIosTv,
  IoIosGitBranch,
  IoIosMusicalNotes,
  IoIosChatbubbles,
  IoIosPaper,
} from "react-icons/io";
import { Dispatch, SetStateAction } from "react";
type SideBarProps = {
  category: number;
  setCategory: Dispatch<SetStateAction<number>>;
};

const SideBar: React.FC<SideBarProps> = ({ setCategory }) => {
  return (
    <div className="sideBar">
      <div className="links">
        <div className="sideLinks">
          <div onClick={() => setCategory(0)}>
            <IoIosHome /> <span>Home</span>
          </div>
          <div onClick={() => setCategory(20)}>
            <IoLogoGameControllerB /> <span>Game</span>
          </div>
          <div onClick={() => setCategory(2)}>
            <IoIosCar /> <span>Automobiles</span>
          </div>
          <div onClick={() => setCategory(17)}>
            <IoIosBaseball /> <span>Sports</span>
          </div>
          <div onClick={() => setCategory(24)}>
            <IoIosTv /> <span>Entertainment</span>
          </div>
          <div onClick={() => setCategory(28)}>
            <IoIosGitBranch /> <span>Technology</span>
          </div>
          <div onClick={() => setCategory(10)}>
            <IoIosMusicalNotes /> <span>Music</span>
          </div>
          <div onClick={() => setCategory(22)}>
            <IoIosChatbubbles /> <span>Blog</span>
          </div>
          <div onClick={() => setCategory(25)}>
            <IoIosPaper />
            <span>News</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
