import "./about.css";
import data from "../../Image.json";
import { useEffect } from "react";
import { CgArrowLongRightC } from "react-icons/cg";
import PART2 from "./PART2";
import {AiFillHome} from "react-icons/ai";

function About(props) {
  useEffect(() => {
    console.log(data);
  });

  return (
    <div id="About-container" className = {props.previewClick === "#prevActive" ? "active" : ''}>
      <div className={props.part2Active === "#PART2" ? "active" : ''} id="About-contents">
        <h1 className="About-title">THIS YEAR’S HOTTEST CHART UPDATE</h1>

        <p className="sub-contents">
          벅스 멜론 지니 플로 및 유튜브 등 다양한 음원 사이트에서<br></br>올해
          데뷔곡&컴백곡 중 가장 핫했던 그룹을 수집하여 업데이트합니다.
        </p>
      </div>

      <div className={props.part2Active === "#PART2" ? "active" : ''} id="About-contents">
        <div className="MusicApp-icons">
          <div className="icons-box">
            {data.logo.map((item) => {
              return <img src={item.src} />;
            })}
          </div>
        </div>
      </div>

      <div className="Preview" onClick={()=>props.setPart2Active("#PART2")}>
            <CgArrowLongRightC className="Arrow" />
            <p>NHMC TOP 1 ?</p>
      </div>

      <div id = "home-button" className = {props.part2Active === "#PART2" ? "active" : ''} onClick={()=>props.setPreviewClick("#")}>
        <AiFillHome className = "Home-icon"/>
        <h1>HOME</h1>
      </div>

      <div
        id="Preview-container"
        className={props.part2Active === "#PART2" ? "active" : ""}
      >
        <PART2 part2Active2 = {props.part2Active} setPart2Active2 = {props.setPart2Active}/>
      </div>
      
      </div>
  );
}

export default About;
