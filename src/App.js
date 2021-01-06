import { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Components/Player/Player';
import { useDataLayerValue } from './DataLayer'

// instance responsible for any interacion between react app and spotify
const spotify = new SpotifyWebApi()

function App() {
  // run code based on given condition
  const [{user, token}, dispatch] = useDataLayerValue()

  useEffect(() => {
    // get token from url
    const hash = getTokenFromUrl()
    // stripped token from the url
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      // stored token in state
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      // gives accessToken to spotify api
      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })
    }
  }, [])

  return (
    <div className="app">
      {/* if there's a token render <Player/> else render <Login/> */}
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
