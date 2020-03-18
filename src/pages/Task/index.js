import React, { Component } from "react";
import api from "../../services/api";
import {
  Container,
  SubmitButton,
  Form,
  List,
  SubmitButtonClear
} from "./styles";

import { MdAdd, MdClear, MdDone } from "react-icons/md";

export default class Task extends Component {
  state = {
    newTask: "",
    tasks: []
  };
  async componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;
    console.log(id);

    const response = await api.get(`/projets/${id}`);
    console.log(response.data.tasks);
    this.setState({ tasks: response.data.tasks });
  }
  handleInputChange = e => {
    this.setState({ newTask: e.target.value });
  };
  handleSubmit = async e => {
    const { match } = this.props;
    const idTask = match.params.id;

    e.preventDefault();

    console.log(idTask);

    const { newTask, tasks } = this.state;
    const id = tasks.length;
    const newtask = { id: id + 1, task: newTask };

    this.setState({ tasks: [...tasks, newtask], newTask: "" });
    await api.post("projets/1", { newtask });
  };
  render() {
    const { newTask, tasks } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Type your task"
            value={newTask}
            onChange={this.handleInputChange}
          />
          <SubmitButton type="submit">
            <MdAdd size={25} color="#fff" />
          </SubmitButton>
        </Form>
        <List>
          {tasks.map(task => (
            <li key={task.id}>
              <span>{task.task}</span>
              <div>
                <SubmitButton>
                  <MdDone size={20} color="#fff" />
                </SubmitButton>
                <SubmitButtonClear>
                  <MdClear size={20} color="#fff" />
                </SubmitButtonClear>
              </div>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
