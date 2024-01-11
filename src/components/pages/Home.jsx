import React from 'react'
import "./Home.css"
import { Fade } from 'react-awesome-reveal'
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Home = () => {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introtext">
      I'm 
      <Fade direction="right" triggerOnce>
        <span className="introname"> Janice Lavoga </span>
      </Fade>
      A Junior Front End Developer
    </span>

    <Fade direction="left" triggerOnce>
        <p className="intropara">
          👋 Hey there, I'm a Junior Front End Developer with a strong foundation in HTML, CSS, and JavaScript.
          I'm enthusiastic about creating user-friendly web experiences
          <br />and always eager to explore new ways to innovate. Let's build something amazing together! 🚀
        </p>
    </Fade>
      
        <a href="https://wa.me/+254772750018" target="_blank" rel="noopener noreferrer">
        <button className='btn'>Contact Me</button>
      </a>
      
      <br />

      <div className="social-icons">
      <a href="https://github.com/JLavvy" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" />
      </a>
      <a href="https://twitter.com/JLavoga" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon" />
      </a>
      <a href="mailto:lavogajanyce@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope className="icon" />
      </a>
    </div>
      </div>
    </section>
  )
}
