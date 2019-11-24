import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  height: 500px;
  background: #fff;
  border-radius: 4px;
  padding: 30px;
  margin: 50px auto;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);

  h1 {
  font-size: 20px;
  text-align: center;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  ul {
    list-style-type: none;
    padding: 0px;
    height: 340px;
    font-size: 16px;
    overflow:auto;
  }

  li {
    display: block;
    position: relative;
    padding: 5px;
    border: 1px solid rgb(233, 231, 231);
    border-radius: 4px;
    height: 30px;
    outline: none;
    margin: 3px;
    color: grey;
  }

  input {
    height: 50px;
    font-size: 16px;
    padding: 10px 15px;
    border: 1px solid lightgrey;
    flex: 1;
    margin-top: 10px;
  }
  
`;

export const Submitbutton = styled.button`
  height: 50px;
  color: #fff;
  font-size: 16px;
  background: #7159c1;
  border-radius: 4px;
  border: 1px solid #7159c1;
  padding: 0 20px;
  margin-top: 10px;
`;


export default Container;