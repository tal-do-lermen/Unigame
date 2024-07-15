import React from 'react';
import './App.css';
import Board from './board';
import { MapSize } from './cfg';
function App() {
  return (
    <div className="App">
      <div className='App-Header'
        style={{
          height: MapSize,
          width: MapSize
        }}>
        <Board />
      </div>
    </div>
  );
}

export default App;
