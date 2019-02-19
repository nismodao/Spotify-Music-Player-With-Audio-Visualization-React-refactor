import React from 'react';

const apiService = ({ url, headers, data }) => Component => {
  return (
    class extends React.Component {
      constructor(props) {
        super();
        this.state = {
          data : [],
        };
      }

      componentDidMount() {
        fetch(url)
        .then(res => res.json())
        .then(data => {
          this.setState({ data: data.results });
        });
      }

      render() {
        return (
          <Compon/>
        );
      }
    }
  );
};

export default apiService;
