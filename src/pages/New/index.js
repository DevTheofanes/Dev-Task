import React, { Component } from "react";
import { Link } from "react-router-dom";

import { MdAdd } from "react-icons/md";

import { Container, Box } from "../../components/container/styles";

import { AddContainer } from "./styles";

import api from "../../services/api";

export default class New extends Component {
  state = {
    newProject: "",
    image: 0,
    add: false,
    images: []
  };

  async componentDidMount() {
    const images = await api.get("images");

    this.setState({ images: images.data });
  }
  handleSubmit = e => {
    e.preventDefault();
  };
  handleInputChange = e => {
    this.setState({ newProject: e.target.value });
  };
  handleBtn = e => {
    //ADICIONAR NOTIFICAÇÃO
    // e.preventDefault();
  };
  render() {
    const { images, newProject } = this.state;
    return (
      <>
        <AddContainer onSubmit={this.handleAdd}>
          <input
            type="text"
            placeholder="Type your new Project"
            value={newProject}
            onChange={this.handleInputChange}
          />
          <Link to="/">
            <button onClick={this.handleBtn}>
              <MdAdd size={30} color="#fff" />
            </button>
          </Link>
        </AddContainer>
        <Container>
          {images.map(image => (
            <Box key={image.id}>
              <img src={image.url} alt={image.id} />
            </Box>
          ))}
        </Container>
      </>
    );
  }
}
