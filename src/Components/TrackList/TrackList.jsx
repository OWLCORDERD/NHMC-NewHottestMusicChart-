import React from 'react'
import './tracklist.css'
import data from '../../Image.json'
import Navbar from "../Header/Navbar"
import {motion} from "framer-motion"

const TrackList = () => {

    window.addEventListener("scroll", function () {
        var Navbar = document.querySelector(".navbar");
    
        var scroll = window.scrollY;
    
        if (scroll > 0) {
          Navbar.classList.add("active");
        } else {
          Navbar.classList.remove("active");
        }
      });

    const trackbox = {
        initial : {
            opacity : 1
        },

        animate : {
            opacity : 1,
            transition : {
                staggerChildren : 0.5,
                delay : 1,
                duration : 2
            }
        }
    }

    const trackitem = {
        initial : {
            opacity : 0,
            y : 50
        },

        animate : {
            opacity : 1,
            y : 0,
            transition : {
                duration : 1
            }
        }
    }

    const cttAnimate = {
        initial : {
            opacity : 0,
            y : 50
        },

        animate : {
            opacity : 1,
            y : 0,
            transition : {
                duration : 1
            }
        }
    }
  return (

    <motion.div className = "TrackList-container" variants={trackbox} initial = "initial" animate = "animate">

        <Navbar/>

        <motion.div className = "contents-box" variants={cttAnimate}>
            <div className = "content-title">
                <h1>tracklist</h1>
            </div>

            <div className = "sub-title">
                <p>check the songs of new singers by year filter.</p>
            </div>

            <select id = "Years-select">
                <option value = "2020">2020</option>
                <option value = "2021">2021</option>
                <option value = "2022">2022</option>
            </select>
        </motion.div>

        <motion.div className = "TrackList-box" variants={trackbox} initial = "initial" animate = "animate">
            {data.TRACKLIST.map((item) => {
                return(
                    <motion.div className = "TrackList-item" variants={trackitem}>
                        <div className = "item-img">
                            <img src = {item.image}/>
                            <video src = {item.mv} autoPlay muted loop/>
                        </div>

                        <div className = "music-title">
                            <h1>{item.title}</h1>
                            <p>{item.group}</p>
                        </div>
                    </motion.div>
                )
            })}
        </motion.div>
    </motion.div>
  )
}

export default TrackList