import SideBar from "../../Components/SideBar/SideBar";
import Feed from "../../Components/Feed/Feed";
import { useState } from "react";
import "./Home.css";
const Home = () => {
  const [category, setCategory] = useState<number>(0);
  return (
    <div className="homeContainer">
      <div className="sidebar">
        <SideBar category={category} setCategory={setCategory} />
      </div>
      <div>
        <Feed category={category.toString()} />
      </div>
    </div>
  );
};

export default Home;
