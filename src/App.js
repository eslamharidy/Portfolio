import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Contact from './components/navbar/Contact';
import Welcome from './components/Homepage/Welcome';


function App() {
  return (
    <div className="App">
      <Contact/>
      <Welcome/>
      <Homepage/>
    </div>
  );
}

export default App;
