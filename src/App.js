import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

function App() {
  const mainChar = ['basudev','arjun','droupadi','shakuni','yudhisthir']
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Person name={mainChar[4]} job='king of Hastinapur'></Person>
        <Person name={mainChar[3]} job='Start of all problems and destructions'></Person>
      </header>
    </div>
  );
}
function Person(props){ //props is a short name for property
  const personStyle={
    border:'2px solid yellow',
    margin:'10px',
    padding:'10px'
    }
  return <div style={personStyle}>
    <h1>Name: {props.name}</h1>
  <h3>Identity: {props.job}</h3>
  </div>
}

export default App;
