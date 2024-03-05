import React from 'react'
import "./Home.css"
import { Fade } from 'react-awesome-reveal'
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Home = () => {
  return (
    <section id='intro'>

      <div className="introContent">

        <div className="intro-1">
          <span className="hello">Hello, </span>
          <span className="introtext">
            I'm
            <Fade direction="right" triggerOnce cascade>
              <span className="introname"> Janice Lavoga Omoke</span>
            </Fade>
            A Junior Front End Developer
          </span>

          <Fade direction="left" triggerOnce cascade>
            <p className="intropara">
              👋 Hey there, I'm a Junior Front End Developer with a strong foundation in HTML, CSS, and JavaScript.
              <br />
              I'm enthusiastic about creating user-friendly web experiences
              and always eager to explore new ways to innovate. Let's build something amazing together! 🚀
            </p>
          </Fade>

          <a href="https://wa.me/+254741196477" target="_blank" rel="noopener noreferrer">
            <button className='btn'>Contact Me</button>
          </a>

          <br />
          <br />

          <div className="social-icons-wrapper">
            <div className="social-icons">
              <a href="https://github.com/JLavvy" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon-1" />
              </a>
              <a href="https://twitter.com/JLavoga" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="icon-2" />
              </a>
              <a href="https://www.linkedin.com/in/janice-lavoga-929805223" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon-3" />
              </a>
              <a href="mailto:lavogajanyce@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="icon-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="intro-2">
          <div className="intro-profile">
            <img
              src="/Me.JPG"
              alt="Profile Picture"
              className="intro-pic"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
