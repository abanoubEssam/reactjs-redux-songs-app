import React from 'react';
import SongDetails from './SongDetails/SongDetails';
import SongList from './SongList/SongList';
function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
