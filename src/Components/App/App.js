import React, {useState} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

function App() {
  
  const [searchResults, setsearchResults] = useState([{name:'name1', artist:'artist1', album:'album1', id:1}, 
  {name:'name2', artist:'artist2', album:'album2', id:2},{name:'name3', artist:'artist3', album:'album3', id:3},
  {name:'name4', artist:'artist4', album:'album4', id:4}])
  
  const [playlistName, setplaylistName] = useState('MyPlaylist');
  
  const [playlistTracks, setPlaylistTracks] = useState([{name:'playlistname1', artist:'playlistartist1', album:'playlistalbum1', id:1}, 
  {name:'playlistname2', artist:'playlistartist2', album:'playlistalbum2', id:2},{name:'playlistname3', artist:'playlistartist3', album:'playlistalbum3', id:3},
  {name:'playlistname4', artist:'playlistartist4', album:'playlistalbum4', id:4}]);
  
  const addTrack = (track) => {
    // check if the track is already in the playlist
    if (playlistTracks.find((savedTrack) => track.id === savedTrack.id)) {
      return; //aka do nothing!
    }
    setPlaylistTracks((prev) => [track, ...prev]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks((prev) =>
      prev.filter((prevTrack) => prevTrack.id !== track.id)
    );
  };
  function updatePlaylistName(playname){
    setplaylistName(playname)

  }
  function savePlaylist(){
    const trackURIs= playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName,trackURIs )
    .then(() => {
      setplaylistName({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
      });
    }
  
  const search = async (term) => {
    const results = await Spotify.search(term);
    setsearchResults(results);
    console.log(results);
  };

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults  searchResults={searchResults} onAdd={addTrack} />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} 
                    onRemove={removeTrack} onNameChange={updatePlaylistName} 
                    onSave={savePlaylist}/>
        </div>
      </div>
    </div>
  );
}

export default App;
