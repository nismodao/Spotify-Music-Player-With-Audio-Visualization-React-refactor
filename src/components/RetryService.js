import React from 'react';

const ErrorMap = {
  'TypeError: Failed to fetch' : 1,
};

class ReTryService extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    console.log('yoo', this.props.isError);
    while (this.props.isError) {
      this.retry();
    }
  }

  componentWillReceiveProps(newProps) {
    if(newProps.isError) {
      console.log('error dude');
    }
    if (this.props.isError && !newProps.isError) {
      this.retry();
    }
  }

  retry() {
    console.log('once error disaapears');
  }

  render() {
    const { isError, error } = this.props;
    console.log('this.props render', this.props);
    return (
      <div>
        {isError && <span>Unable To Connect...Please Check your connection.</span>}
      </div>
    );
  }
}

export default ReTryService;
