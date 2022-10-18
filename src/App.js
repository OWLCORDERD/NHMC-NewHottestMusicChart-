import "./styles.css";
import Main from "./Components/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Part1 from "./Components/About/PART1"
import TrackList from "./Components/TrackList/TrackList"
import News from "./Components/News/News"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path = "/" element={<Main/>} />
    <Route path = "/TrackList" element = {<TrackList/>} />
    <Route path = "/News" element = {<News/>} />
    </Routes>
    </BrowserRouter>
  );
}
