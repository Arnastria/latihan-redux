// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import JSRecorder from './JSRecorder';
import Recorder from './recorder';
import RecorderManual from './recorder/recorderManual';
import { RouteSelector } from './routes';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//       </header>
//     </div>
//   );
// }

function App() {
  return <JSRecorder />
  // return <RouteSelector />
}

export default App;
