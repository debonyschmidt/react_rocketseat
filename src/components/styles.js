import Styled from 'styled-components';

export const Item = Styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid rgb(233, 231, 231);
  border-radius: 4px;
  height: 25px;
  outline: none;
  margin: 3px;
  color: grey;
  text-overflow: ellipsis;
  overflow: hidden;
  vertical-align: middle;
`;

export const DeleteButton = Styled.button`
  border: none;
  color: grey;
  margin-right: 5px;
  
`;

