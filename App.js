import React from 'react';
import './App.css';
import Front from './components/Front'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Backend from './components/Backend';

function App() {
  return (
    <div className="App">
      <Front/>
     <Footer/>
     <Backend/>
    </div>
  );
}

export default App;
