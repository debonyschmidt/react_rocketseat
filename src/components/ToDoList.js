import React, { Component } from 'react';

import Container, { Form, Submitbutton } from './container/index';

import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  state = {
    newTask: '',
    tasks: []
  };

  componentDidMount() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.setState({ tasks: JSON.parse(tasks) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }
  }

  handleInputChange = e => {
    this.setState({ newTask: e.target.value });
  }
  handleSubmit = e => {
    e.preventDefault();

    this.setState({ 
      tasks: [... this.state.tasks, this.state.newTask],
      newTask: '' 
    });
  }

  handleDelete = (indextask) => {
    const taskIndex = [... this.state.tasks];
    taskIndex.splice(indextask, 1);
    this.setState({ tasks: taskIndex });
  }

  render() {

    return (
    <Container>
      <h1>
        To Do List 
      </h1>
      <Form onSubmit = {this.handleSubmit}>
        <ul>
          {this.state.tasks.map((task, index) => (
            <ToDoItem 
              key={index} 
              task={task} 
              onDelete={() => this.handleDelete(index)}
            />
          ))}
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTask}
        />
        <Submitbutton type="submit">Send</Submitbutton>
      </Form>
    </Container>
    );
  }
}

export default ToDoList;