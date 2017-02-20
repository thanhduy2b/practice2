import React from 'react';

export default function TodoListHeader(props) {
  const version = {
    major: 0,
    minor: 1
  };

  return (
    <div>
      <h2>Task Manager v.{version.major}.{version.minor}</h2>
    </div>
  );
}
