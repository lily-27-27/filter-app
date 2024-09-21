
import React from 'react';
import './Item.css'; 

const Item = React.memo(({ item }) => {
  return <div className="item">{item}</div>;
});

export default Item;
