import React from 'react';
import PropTypes from 'prop-types';

function ToDoItem({ task, onDelete }) {
  return (
  <li>
  {task}
  <button onClick={onDelete} type="button">Delete</button>
  </li>
  )
}

ToDoItem.defaultProps = {
  task: 'Blank',
};

ToDoItem.propTypes = {
  task: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default ToDoItem;