import React from 'react'
import "./Home.css"
import { Fade } from 'react-awesome-reveal'

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
      </div>
    </section>
  )
}
