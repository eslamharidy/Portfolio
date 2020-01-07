import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Contact from './components/navbar/Contact';
import Welcome from './components/Homepage/Welcome';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      <Contact/>
      <Welcome/>
      <Homepage/>
      <About/>
    </div>
  );
}

export default App;
