// App.jsx

import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { Draggable } from './Draggable';
import { Droppable } from './Droppable';

function App() {
  const users = [
    { id: 1, first_name: "Jarad", role: "Subcontractor" },
    { id: 2, first_name: "Eugenie", role: "Subcontractor" },
    { id: 3, first_name: "Shandra", role: "Construction Expeditor" },
    { id: 4, first_name: "Patrizius", role: "Surveyor" },
    { id: 5, first_name: "Angele", role: "Construction Manager" }
  ];

  const [droppedUser, setDroppedUser] = useState(null);

  const handleDragEnd = ({ over, active }) => {
    if (over && over.id === "droppable") {
      const userId = parseInt(active.id.split('-')[1]);
      const user = users.find(user => user.id === userId);
      setDroppedUser(user);
    } else {
      setDroppedUser(null);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {users.map(user => (
        <Draggable key={user.id} id={`draggable-${user.id}`} aria-label={user.id}>
          {user.first_name}
        </Draggable>
      ))}
      <Droppable id="droppable">
        {droppedUser ? droppedUser.first_name : 'Drop here'}
      </Droppable>
    </DndContext>
  );
}

export default App;
