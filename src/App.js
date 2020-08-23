import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

function App() {
  const [users,setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div className="App">
      
      <header className="App-header">
      {
        users.map (user => <li  key={user.id}>{user.name}</li>)
      }
      </header>
    </div>
  );
}


export default App;
