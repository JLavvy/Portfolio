
import React from 'react';
import './App.css';
import { Nav } from './components/Nav';
import { Home } from './components/pages/Home';
import { About} from './components/pages/About';
import { Projects } from './components/pages/Projects';
import { Contact } from './components/pages/Contact';


function App() {
 return (
  <>
   <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />

    </div>
  </>
   
 );
}

export default App;