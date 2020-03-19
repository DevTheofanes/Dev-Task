import React, { Component } from "react";
import { Link } from "react-router-dom";

import { MdAdd } from "react-icons/md";
import { AddTask } from "./styles";
import { Container, Box } from "../../components/container/styles";

import api from "../../services/api";

export default class Dashboard extends Component {
  state = {
    tasks: []
  };

  async componentDidMount() {
    const response = await api.get("projets");
    this.setState({ tasks: response.data });
  }
  render() {
    const { tasks } = this.state;
    return (
      <>
        <Container>
          {tasks.map(task => (
            <Box key={task.id}>
              <Link to={`/task/${task.id}`}>
                <img src={task.img} alt={task.title} />
              </Link>
              <span>{task.title}</span>
            </Box>
          ))}
          <AddTask>
            <Link to={"new"}>
              <MdAdd size={80} color="#fff" />
            </Link>
          </AddTask>
        </Container>
      </>
    );
  }
}
