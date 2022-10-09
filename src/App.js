import "./styles.css";
import Main from "./Components/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./Components/Header/Header";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path = "/" element={<Main/>} />
    </Routes>
    </BrowserRouter>
  );
}
