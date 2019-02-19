import React from 'react';

class AlbumGrid extends React.Component {
  constructor(props) {
    super();
    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    if (this.props.items) {
      this.setState({ albums: this.props.items });
    }
  }

  render() {
    const { onSelectAlbum, items } = this.props;
    return (
      <div className="mw6 fr ph3-ns">
        {items.map((item, index) => {
          return (
            <div key={index} className="fl w-50 pa2" value={item.uri} onClick={onSelectAlbum}>
              <img src={item.images[0].url} />
            </div>
          );
        })
      }
      </div>
    );
  }
};

export default AlbumGrid;
