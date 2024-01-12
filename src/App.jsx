
import React from 'react';
import './App.css';
import { Nav } from './components/Nav';
import { Home } from './components/pages/Home';
import { About} from './components/pages/About';
import { Projects } from './components/pages/Projects';
import { Contact } from './components/pages/Contact';
import { Footer }from './components/Footer';


function App() {
 return (
  <>
   <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />

    </div>
  </>
   
 );
}

export default App;