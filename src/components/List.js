import React from 'react';

const List = (items) => {
  console.log('data is from list', results, 'isError', isError);
  return (<ul>
    {items.map(datum => (
      <li key={datum.id}>
        <img src={datum.urls.regular} />
      </li>
    ))}
  </ul>);
};

export default List;

