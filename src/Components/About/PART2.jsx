import "./about.css";
import data from "../../Image.json";
import Album from "../../assets/Image/IVE/IVE-AfterLike.jpg";
import {AiFillHome} from "react-icons/ai";
import {Link} from "react-router-dom"
import { CgArrowLongLeftC } from "react-icons/cg";

function PART2(props) {
  return (
    <div id="AboutTrack-container" className = {props.part2Active === "#PART2" ? "active" : ""}>
      
      <div className = "PART2-section">
      <div className="About-contents">
        <div className="AboutTrack-title">
          <h1>2022 NHMC CHART TOP 1</h1>
        </div>

        <div className="AboutTrack-subTitle">
          <p>
            NHMC에서는 월말마다 음원 사이트에서 업데이트되는 <br></br>
            집계결과를 바탕으로 아이돌 차트 1순위를 업데이트합니다.
          </p>
        </div>
      </div>


      <div className="CHART1-Component">
        <div className="CHART1-MV">
          <iframe
            src="https://www.youtube.com/embed/F0B7HDiY-10?autoplay=1&playlist=F0B7HDiY-10&loop=1&controls=0&amp;mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <div className="CHART1-Album">
            <img src={Album} alt="" />
          </div>

          <div className="CHART1-name">
            <h1>New Hattest Music Chart TOP 1</h1>
            <p>As Of September</p>
          </div>
          <button className="CHART1-PREVIEW">+ PREVIEW</button>
        </div>
      </div>

      <div className="Preview" onClick={()=>props.setPart2Active("#")}>
            <CgArrowLongLeftC className="Arrow" />
            <p>NHMC TOP 1 ?</p>
      </div>

      </div>
    </div>
  );
}
export default PART2;
