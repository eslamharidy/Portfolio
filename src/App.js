import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Contact from './components/navbar/Contact';

function App() {
  return (
    <div className="App">
      <Contact/>
      <Homepage/>
    </div>
  );
}

export default App;
