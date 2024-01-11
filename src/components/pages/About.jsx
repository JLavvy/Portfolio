
import React from 'react'
import {FaGraduationCap, FaRegClock} from 'react-icons/fa'
import "./About.css"

export const About = () => {
  return (
    <section id='about'>
      <p className="about-text">Get to Know more</p>
      <h1 className="about-title">About me</h1>
      <div className="about-container">
        <div className="about-profile">
          <img src="./src/assets/FAN_2730 copy.JPG" alt="Profile Picture" className="about-pic" />
        </div>
        <div className="about-container-details">

          <div className="about-containers">

            <div className="details-container">
            <FaRegClock className="icon" onClick={Location}/>
            <h3>Experience</h3>
            <p>2+ years <br /> FrontEnd Development</p>
            </div>

            <div className="details-container">
            <FaGraduationCap className="icon" />
            <h3>Education</h3>
            <p>B.SC. Bachelors Degree In<br /> Computer Science</p>
            </div>

          </div>
          <div className="text-container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis sapiente hic odio quod voluptates alias nobis excepturi perspiciatis natus voluptatem exercitationem voluptas quibusdam deserunt impedit libero rerum adipisci, quos nisi velit sunt! Quibusdam magni laborum perspiciatis, eaque quos nobis?</p>
          </div>
        </div>
       
      </div>
     
    </section>
  )
}

