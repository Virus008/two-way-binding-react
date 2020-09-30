import React from 'react';
import Header from './components/Header';
import Bind from './components/Bind';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="container">
        <Bind />
      </div>
    </div>
  );
}

export default App;