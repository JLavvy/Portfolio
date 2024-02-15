import React from 'react'
import "./Projects.css";

export const Projects = () => {
  return (
    <section id='projects'>
      <h1 className="projects-title">Projects</h1>
      <br />

      <div class="wrapper">
        <div class="card" ontouchstart="this.classList.toggle('hover');">
          <br />
          <div class="container">
            <div class="front" >
              <div class="inner">
                <p>Kisuya and Weyombo Advocates Website</p>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <p>This project represents a collaborative effort to create a law firm website using HTML, CSS and JavaScript.(Incomplete)</p>

                <div class="buttons-container">
                  <a href="https://kisuyaandweyombo-trial.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <button className='btn'>Demo</button>
                  </a>
                  <a href="https://github.com/JoseMbilwa/Kisuyaandweyombo" target="_blank" rel="noopener noreferrer">
                    <button className='btn'>Code</button>
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div class="card" ontouchstart="this.classList.toggle('hover');">
          <br />
          <div class="container">
            <div class="front-2" >
              <div class="inner-2">
                <p>Compass Track Mentors Website</p>
              </div>
            </div>
            <div class="back-2">
              <div class="inner-2">
                <p>This project represents a collaborative effort to revamp an NGO website using HTML, CSS and JavaScript.</p>


                <div class="buttons-container">
                  <a href="https://compasstrackmentors.org/" target="_blank" rel="noopener noreferrer">
                    <button className='btn'>Demo</button>
                  </a>
                  <a href="https://github.com/JoseMbilwa/CT-Mentors" target="_blank" rel="noopener noreferrer">
                    <button className='btn'>Code</button>
                  </a>
                </div>

              </div>
            </div>


          </div>
        </div>

        <div class="card" ontouchstart="this.classList.toggle('hover');">
          <br />
          <div class="container">
            <div class="front-3" >
              <div class="inner-3">
                <p>Coming soon</p>
              </div>
            </div>
            <div class="back-3">
              <div class="inner-3">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>

                <div class="buttons-container">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <button className='btn'>Demo</button>
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <button className='btn'>Code</button>
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>



      </div>

    </section>

  )
}
