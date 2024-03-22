// Droppable.jsx

import React from 'react';
import { useDroppable } from '@dnd-kit/core';

function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    width: '200px', 
    height: '100px', 
    border: '2px dashed #000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isOver ? 'lightblue' : 'white',
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

export  {Droppable}