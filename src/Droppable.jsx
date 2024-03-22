// Droppable.jsx

import React from 'react';
import { useDroppable } from '@dnd-kit/core';

function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    width: '200px', // İhtiyaca göre genişliği ayarlayın
    height: '100px', // İhtiyaca göre yüksekliği ayarlayın
    border: '2px dashed #000', // Kesikli kenarlık ekleyin
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

export { Droppable }; // Droppable bileşenini adlandırılmış bir şekilde dışa aktarın
