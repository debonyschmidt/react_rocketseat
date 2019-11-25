import React from 'react';
import PropTypes from 'prop-types';
import { GoTrashcan }  from 'react-icons/go';

import { Item, DeleteButton } from './styles';

function ToDoItem({ task, onDelete }) {
  return (
  <Item>
  {task}
  <DeleteButton 
    onClick={onDelete} 
    type="button">
    <GoTrashcan />
  </DeleteButton>
  
  </Item>
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