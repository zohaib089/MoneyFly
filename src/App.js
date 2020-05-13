import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar.jsx';


const App = () => {
  return (
    <div className="container-fluid">
      <Navbar />
    </div>
  );
};





export default App;

ReactDOM.render(<App />, document.getElementById('app'));
