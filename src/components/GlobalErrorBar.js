import React from 'react';

const GlobalErrorBar = ({isError: isError, error: error }) => {
  return (
    <div>
      {isError && <div>{error.toString()}</div>}
    </div>
  );
};

export default GlobalErrorBar;
