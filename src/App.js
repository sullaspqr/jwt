import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [data, setData] = useState('');

return (
  <div>
    <h1>Bejelentkezés</h1>
    Felhasználónév: <input
      type="text"
      placeholder="felhasználónév"
      value={username}
      onChange={(e) => setUsername(e.target.value)} /><br />
    Jelszó: <input
      type="password"
      placeholder="jelszó"
      value={password}
      onChange={(e) => setPassword(e.target.value)} />
    <button
      onClick={handleLogin}>Bejelentkezés</button>
  {token &&(
    <div>
      <h2>Védett végpont</h2>
      <button onClick={fetchData}>Végpont lekerdezés</button>
      {data && (
        <ul> 
        { data.map((item) => (
        <li key={item.id}>{item.name} - {item.price}</li>
      ))}
      </ul>
      )} 
    </div>
  )}
  </div>
  );
}

export default App;
