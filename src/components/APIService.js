import React from 'react';
import mockData from './mockData';

class APIService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      isError: false,
      error: '',
    };
    this.fetchUrl = this.fetchUrl.bind(this);
  }

  componentDidMount() {
    this.fetchUrl(mockData);
  }

  fetchUrl(data) {
    // fetch(this.props.url)
    // .then(response => response.json())
    // .then(data => {
    //   this.setState({ data: data.results });
    // })
    // .catch(e => this.setState({ error: e, isError: true }));
    this.setState({ results: data });
  }

  render() {
    const { results, isError, error } = this.state;
    return (
      <div>
        {this.props.render(results, isError, error, this.fetchUrl)}
      </div>
    );
  };
};

export default APIService;
