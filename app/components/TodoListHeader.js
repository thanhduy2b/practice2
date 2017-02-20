import React from 'react';

export default function TodoListHeader() {
  const version = {
    major: 1,
    minor: 0
  };

  return (
    <div>
      <h2>Task Manager {version.major}.{version.minor}</h2>
    </div>
  );
};
