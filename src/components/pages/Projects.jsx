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
                <p>Coming soon</p>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>

                <div class="buttons-container">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <button className='btn'>Demo</button>
                  </a>
                  <a href="https://github.com/JLavvy/" target="_blank" rel="noopener noreferrer">
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
            <div class="front" >
              <div class="inner">
                <p>Coming soon</p>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>


                <div class="buttons-container">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <button className='btn'>Demo</button>
                  </a>
                  <a href="https://github.com/JLavvy/" target="_blank" rel="noopener noreferrer">
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
            <div class="front" >
              <div class="inner">
                <p>Coming soon</p>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>

                <div class="buttons-container">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <button className='btn'>Demo</button>
                  </a>
                  <a href="https://github.com/JLavvy/" target="_blank" rel="noopener noreferrer">
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
