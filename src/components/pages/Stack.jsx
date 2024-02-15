import React from 'react'
import "./Stack.css"

export const Stack = () => {
  return (
    <section id='stack'>
        <div className='skills'>
        <h2>Tech Stack</h2>
        <p className='stack-text'>Explore the technologies I work with:</p>
        <div className="tech-stack">
          <div className="tech-icon" id="html">
            <img src="/html.png" alt="HTML" />
          </div>
          <div className="tech-icon" id="css">
            <img src="/css.png" alt="CSS" />
          </div>
          <div className="tech-icon" id="javascript">
            <img src="/javascript.png" alt="JavaScript" />
          </div>
          <div className="tech-icon" id="react">
            <img src="/react.png" alt="React" />
          </div>
        </div>

      </div>
    </section>
  )
}
