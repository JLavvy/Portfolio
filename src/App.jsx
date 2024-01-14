
import React from 'react';
import './App.css';
import { Nav } from './components/Nav';
import { Home } from './components/pages/Home';
import { About} from './components/pages/About';
import { Projects } from './components/pages/Projects';
//import { Contact } from './components/pages/Contact';
import { Footer }from './components/Footer';
import { Stack } from './components/pages/Stack';


function App() {
 return (
  <>
   <div className="App">
      <Nav />
      <Home />
      <About />
      <Stack />
      <Projects /> 
     <br /> 
      <Footer />

    </div>
  </>
   
 );
}

export default App;