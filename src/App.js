
// import { Router } from 'react-router-dom';
import Router from './router/router';
import { useState } from 'react';
import './App.scss';
import { SongsContext } from './context/songs.context';

function App() {
  const [songs, setSongs] = useState([])

  return (
    <SongsContext.Provider value={{ songs, setSongs }}>
      <div className="app">
        <Router />
      </div>
    </SongsContext.Provider>
  );
}

export default App;
