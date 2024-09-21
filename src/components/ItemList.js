
import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const ItemList = () => {
  const items = useSelector((state) => state.items.list);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
