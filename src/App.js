import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePageContainer from './components/Homepage/HomePageContainer';
import About from './components/About/About';




function App() {
  return (
    <div className="App">
      
    <HomePageContainer/>
    <About/>

      
      </div>
  );
}

export default App;
