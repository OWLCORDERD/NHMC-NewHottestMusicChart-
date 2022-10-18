import React from 'react'
import "./news.css"
import Navbar from "../Header/Navbar"
import data from "../../Image.json"

const News = () => {

  return (
    <div className = "News-container">

        <Navbar/>

        <div className = "News-contents">
            <h1>brand news</h1>
            <p>최근 화제되고 있는 앨범의 뉴스를 업데이트하는 피드입니다.</p>
        </div>

        

    </div>
  )
}

export default News