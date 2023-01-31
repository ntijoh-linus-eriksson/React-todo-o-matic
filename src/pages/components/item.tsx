import React from 'react';
import { useState } from 'react';
//import deleteItem from 'src/pages/index'

//@ts-ignore
export default function Item({value, onDelete}) {

  return (
    <div className="Item-Border">
      <h3>{value}</h3><button onClick={onDelete}>x</button>
    </div>
  )
}
