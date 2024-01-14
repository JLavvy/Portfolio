
import React from 'react'
import { FaGraduationCap, FaRegClock } from 'react-icons/fa'
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
              <FaRegClock className="icon" onClick={Location} />
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
            <p>I'm a recent Computer Science graduate with a passion for crafting engaging and user-friendly front-end experiences for websites and web applications. My journey in web development has equipped me with a solid foundation and a zest for creating seamless, impactful user interfaces.
              Explore some of my recent projects in the Projects section to get a glimpse of my skills and dedication. Each project is a step towards contributing to the success of the overall product.
              Beyond coding, I enjoy sharing insights and knowledge I've gained throughout my journey in web development. Let's connect and learn from each other!
              I'm currently seeking exciting job opportunities where I can apply my skills, continue learning, and contribute to meaningful projects. If you have an opportunity that aligns with my passion and skills, feel free to reach out. I'm eager to embark on the next phase of my career journey. 🚀</p>
          </div>
        </div>

      </div>

      

    </section>
  )
}

