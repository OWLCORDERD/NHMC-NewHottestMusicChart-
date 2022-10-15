import { react } from "react";
import "./header.css";
import NewJeansThumNail from "../../assets/Image/NEWJEANS/NEW-JEANS.jpg";
import NewJeansAlbum from "../../assets/Image/NEWJEANS/NEWJEANS-Elbum.jpg";
import IVEThumNail from "../../assets/Image/IVE/AfterLike-Profile.jpeg";
import IVEAlbum from "../../assets/Image/IVE/IVE-AfterLike.jpg";
import BlackPinkThumNail from "../../assets/Image/BlackPink/PinkVenom-Profile.jpg";
import BlackPinkAlbum from "../../assets/Image/BlackPink/PinkVenom-Album.jpg";
import ITZYThumNail from "../../assets/Image/ITZY/ITZY-Profile.jpg";
import ITZYAlbum from "../../assets/Image/ITZY/Sneakers-Album.jpg";
import { CgArrowLongRightC } from "react-icons/cg";
import About from "../About/PART1";
import { useState } from "react";
import {motion} from "framer-motion";
import Navbar from "./Navbar";

function Header() {
  const [selectClick, setSelectClick] = useState("#");

  const [previewClick, setPreviewClick] = useState("#");

  const [part2Active, setPart2Active] = useState("#");

  window.addEventListener("scroll", function () {
    var Navbar = document.querySelector(".navbar");

    var scroll = window.scrollY;

    if (scroll > 0) {
      Navbar.classList.add("active");
    } else {
      Navbar.classList.remove("active");
    }
  });

  const textAnimation = {
    initial : {
      opacity : 0,
      x : "-30%"
    },
    animate : {
      opacity : 1,
      x : 0,
      transition : {
        staggerChildren : 0.8,
        duration : 2
      }
    }
  }

  const textAnimation2 = {
    initial : {
      opacity : 0,
    },
    animate : {
      opacity : 1
    }
  }


  return (
    <div className="Header-container">

      <Navbar setPreviewClick = {setPreviewClick} setPart2Active = {setPart2Active}/>

      <div className = {previewClick === "#prevActive" ? "active" : ''} id="Slider-container">
        <motion.div className="Slider-contents" variants={textAnimation} initial = "initial" animate = "animate">
          <motion.p variants={textAnimation2}>2022 MUSIC CHART</motion.p>
          <motion.h1 variants={textAnimation2}>2022 Latest Idol Ranking</motion.h1>

          <motion.div className="Sub-menu" variants={textAnimation2}>
            <div className="Slider-select">
              <div className="select-name">
                <h1 className={selectClick === "#" ? "active" : ""}>
                  NEW JEANS
                </h1>
                <h1 className={selectClick === "#IVE" ? "active" : ""}>IVE</h1>
                <h1 className={selectClick === "#BlackPink" ? "active" : ""}>
                  BLACK PINK
                </h1>
                <h1 className={selectClick === "#ITZY" ? "active" : ""}>
                  ITZY
                </h1>
              </div>

              <div className="select-button">
                <a
                  href="#"
                  onClick={() => setSelectClick("#")}
                  className={selectClick === "#" ? "active" : ""}
                ></a>

                <a
                  href="#"
                  onClick={() => setSelectClick("#IVE")}
                  className={selectClick === "#IVE" ? "active" : ""}
                ></a>

                <a
                  href="#"
                  onClick={() => setSelectClick("#BlackPink")}
                  className={selectClick === "#BlackPink" ? "active" : ""}
                ></a>
                <a
                  href="#"
                  onClick={() => setSelectClick("#ITZY")}
                  className={selectClick === "#ITZY" ? "active" : ""}
                ></a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div id="First-Slider" className={selectClick === "#" ? "active" : ""}>
          <img src={NewJeansAlbum} alt="" className="ALBUM" />
          <img src={NewJeansThumNail} alt="" />
        </div>

        <div
          id="First-Slider"
          className={selectClick === "#IVE" ? "active" : ""}
        >
          <img src={IVEAlbum} alt="" className="ALBUM" />
          <img src={IVEThumNail} alt="" />
        </div>

        <div
          id="First-Slider"
          className={selectClick === "#BlackPink" ? "active" : ""}
        >
          <img src={BlackPinkAlbum} alt="" className="ALBUM" />
          <img src={BlackPinkThumNail} alt="" />
        </div>

        <div
          id="First-Slider"
          className={selectClick === "#ITZY" ? "active" : ""}
        >
          <img src={ITZYAlbum} alt="" className="ALBUM" />
          <img src={ITZYThumNail} alt="" />
        </div>
      </div>

      <motion.div id="Preview" className = {previewClick === "#prevActive" ? "active" : ''} onClick={() => setPreviewClick("#prevActive")} initial = {{opacity : 0, y : 100}} animate = {{opacity : 1, y : 0}} transition = {{duration : 1, delay : 2}}>
        <CgArrowLongRightC className="Arrow" />
          <p>ABOUT NHMC</p>
      </motion.div>

      <div
        id="Preview-container"
        className={previewClick === "#prevActive" ? "active" : ""}
      >
        <About previewClick = {previewClick} setPreviewClick = {setPreviewClick} part2Active = {part2Active} setPart2Active = {setPart2Active}/>
      </div>

    </div>
  );
}

export default Header;
