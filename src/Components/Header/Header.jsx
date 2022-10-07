import { react } from "react";
import "./header.css";
import NewJeansThumNail from "../../assets/Image/NEWJEANS/NEW-JEANS.jpg";
import NewJeansAlbum from "../../assets/Image/NEWJEANS/NEWJEANS-Elbum.jpg";
import IVEThumNail from "../../assets/Image/IVE/AfterLike-Profile.jpeg";
import IVEAlbum from "../../assets/Image/IVE/AfterLike-Profile.jpeg";
import BlackPinkThumNail from "../../assets/Image/BlackPink/PinkVenom-Profile.jpg";
import BlackPinkAlbum from "../../assets/Image/BlackPink/PinkVenom-Album.jpg";
import ITZYThumNail from "../../assets/Image/ITZY/ITZY-Profile.jpg";
import ITZYAlbum from "../../assets/Image/ITZY/ITZY-Profile.jpg";
import { CgArrowLongRightC } from "react-icons/cg";
import About from "../About/PART1";
import About2 from "../About/PART2";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [selectClick, setSelectClick] = useState("#");

  window.addEventListener("scroll", function () {
    var Navbar = document.querySelector(".navbar");

    var scroll = window.scrollY;

    console.log(scroll);

    if (scroll > 0) {
      Navbar.classList.add("active");
    } else {
      Navbar.classList.remove("active");
    }
  });

  return (
    <div className="Header-container">
      <div className="navbar">
        <div className="logo">
          <h1>NHMC</h1>
          <p>New Hottest Music Chart</p>
        </div>

        <div className="menu-button">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className = {selectClick === "#prevActive" ? "active" : ''} id="Slider-container">
        <div className="Slider-contents">
          <p>2022 MUSIC CHART</p>
          <h1>2022 Latest Idol Ranking</h1>

          <div className="Sub-menu">
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
          </div>
        </div>

        <div id="First-Slider" className={selectClick === "#" ? "active" : ""}>
          <img src={NewJeansAlbum} alt="" className="ALBUM" />
          <img src={NewJeansThumNail} alt="" />
          <div
            className="Preview"
            onClick={() => setSelectClick("#prevActive")}
          >
            <CgArrowLongRightC className="Arrow" />
            <p>ABOUT NHMC</p>
          </div>
        </div>

        <div
          id="First-Slider"
          className={selectClick === "#IVE" ? "active" : ""}
        >
          <img src={IVEAlbum} alt="" className="ALBUM" />
          <img src={IVEThumNail} alt="" />
          <div className="Preview">
            <CgArrowLongRightC className="Arrow" />
            <p>ABOUT NHMC</p>
          </div>
        </div>

        <div
          id="First-Slider"
          className={selectClick === "#BlackPink" ? "active" : ""}
        >
          <img src={BlackPinkAlbum} alt="" className="ALBUM" />
          <img src={BlackPinkThumNail} alt="" />
          <div className="Preview">
            <CgArrowLongRightC className="Arrow" />
            <p>ABOUT NHMC</p>
          </div>
        </div>

        <div
          id="First-Slider"
          className={selectClick === "#ITZY" ? "active" : ""}
        >
          <img src={ITZYAlbum} alt="" className="ALBUM" />
          <img src={ITZYThumNail} alt="" />
          <div className="Preview">
            <CgArrowLongRightC className="Arrow" />
            <p>ABOUT NHMC</p>
          </div>
        </div>
      </div>

      <div
        id="Preview-container"
        className={selectClick === "#prevActive" ? "active" : ""}
      >
        <About/>
      </div>

    </div>
  );
}

export default Header;
