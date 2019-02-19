import React from 'react';

class SongList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentSong: '',
    };
  }
  render() {
    return (
      <div className="mw7 outline ma4">
        {this.props.songs.map((song, index) => {
          return (
          <li key={index} onClick={this.props.onSongSelect} url={song.preview_url}>
            {song.name}
          </li>
          );
        })
        }
      </div>
    );
  }
};

export default SongList;
