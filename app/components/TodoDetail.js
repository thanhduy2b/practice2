import React, { PropTypes } from 'react';

const TodoDetail = (todo) => (
  <div>
  </div>
);

TodoDetail.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default TodoDetail;
