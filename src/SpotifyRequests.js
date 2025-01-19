const clientId = 'e3e63bea371c4356845d3a43b88f90f8';
const redirectUri = 'http://localhost:3000';
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  getSearchResults(input) {
    const accessToken = Spotify.getAccessToken();
    const query = encodeURIComponent(input);

    return fetch(`https://api.spotify.com/v1/search?type=track&q=${query}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    })
    .catch(error => {
      console.error("Error fetching tracks from Spotify:", error);
      return [];
    });
  },

  savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
        return Promise.reject(new Error("Invalid playlist name or track URIs"));
    }

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    return fetch('https://api.spotify.com/v1/me', { headers: headers })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch user ID: ${response.status}`);
            }
            return response.json();
        })
        .then(jsonResponse => {
            userId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ name: name })
            });
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to create playlist: ${response.status}`);
            }
            return response.json();
        })
        .then(jsonResponse => {
            const playlistId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ uris: trackUris })
            });
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to add tracks to playlist: ${response.status}`);
            }
        })
        .catch(error => {
            console.error("Error saving playlist:", error);
            throw error; 
        });
  }
};

export default Spotify;