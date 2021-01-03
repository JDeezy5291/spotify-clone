import { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'

function App() {
  // run code based on given condition
  const [token, setToken] = useState(null)

  useEffect(() => {
    // get token from url
    const hash = getTokenFromUrl()
    // stripped token from the url
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      // stored token in state
      setToken(_token)
    }
    console.log('TOKEN HERE >>>>>>>', token)
  }, [])
  return (
    <div className="app">
      {/* if there's a token render <Player/> else render <Login/> */}
      {
        token ? (
          <h1>im logged in</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
