import React from 'react';
import Grid from './Grid';
import FrequencySpectrum from './FrequencySpectrum';
import Player from './Player';
import SongList from './SongList';
import mockData from './mockData';
import mockSongData from './mockSongData';

class AppContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      albumItems: [],
      songs: [],
      currentSong: '',
      command: '',
      shouldDraw: false,
      analyser: undefined,
    };
    this.handleSelectAlbum = this.handleSelectAlbum.bind(this);
    this.handleSongSelect = this.handleSongSelect.bind(this);
    this.startSpectrum = this.startSpectrum.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.results.albums) {
      return {
        albumItems: props.results.albums.items,
        songs: [...state.songs],
      };
    } else if (props.results.tracks) {
      return {
        albumItems: [...state.albumItems],
        songs: props.results.tracks.items,
      };
    } else {
      return state;
    }
  }

  componentDidMount() {
    if (this.props.results.albums) {
      this.setState({albumItems: this.props.results.albums.items });
    }
  }

  searchAlbums(query) {
    this.props.fetch(mockData);
  }

  getTracksForAlbum(album) {
    this.props.fetch(album);
  }

  handleSelectAlbum(album) {
    this.getTracksForAlbum(mockSongData);
  }

  handleSearchAlbum(album) {
    this.searchAlbum(mockData);
  }

  handleSongSelect(e) {
    this.playSong(e.target.getAttribute('url'));
  }

  playSong(url) {
    if (this.state.command === 'play') {
      this.setState({ currentSong: url, command: 'stop' });
    } else {
      this.setState({ currentSong: url, command: 'play' });
    }
  }

  stopSong(url) {
    this.setState({ currentSong: url, command: 'stop', shouldDraw: false });
  }

  startSpectrum(analyser) {
    this.setState({ analyser: analyser, shouldDraw: true });
  }

  render() {
    return (
      <div>
        <div>
          <FrequencySpectrum
            shouldDraw={this.state.shouldDraw}
            analyser={this.state.analyser}
          />
        </div>
        <div>
          <Player
            song={this.state.currentSong}
            command={this.state.command}
            startSpectrum={this.startSpectrum}
          />
          <SongList
            songs={this.state.songs}
            onSongSelect={this.handleSongSelect}
          />
        </div>
        <div>
          <Grid
            onSelectAlbum={this.handleSelectAlbum}
            items={this.state.albumItems}
          />
        </div>
      </div>
    );
  }
}

export default AppContainer;
