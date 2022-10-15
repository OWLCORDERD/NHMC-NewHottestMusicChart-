import "./styles.css";
import Main from "./Components/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Part1 from "./Components/About/PART1"
import TrackList from "./Components/TrackList/TrackList"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path = "/" element={<Main/>} />
    <Route path = "/TrackList" element = {<TrackList/>} />
    </Routes>
    </BrowserRouter>
  );
}
