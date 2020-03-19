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
    const { newProject, image } = this.state;
    if (!newProject) {
      //alerta falta nome
      console.log("alerta falta nome");
    }
    if (image === 0) {
      //alerta falta image
      console.log("alerta falta image");
    }
    e.preventDefault();
  };
  render() {
    const { images, newProject } = this.state;
    return (
      <>
        <AddContainer onSubmit={this.handleSubmit}>
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
            <Box
              // style="background-image:url(images/html.jpg)"
              key={image.id}
            >
              <img src={image.url} alt={image.id} />
            </Box>
          ))}
        </Container>
      </>
    );
  }
}
