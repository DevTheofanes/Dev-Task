import React, { Component } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import { MdAdd, MdDone } from "react-icons/md";

import { Container, Box } from "../../components/container/styles";

import { AddContainer, Button } from "./styles";

import api from "../../services/api";

export default class New extends Component {
  state = {
    newProject: "",
    image: 0,
    add: false,
    images: [],
    imageUrl: ""
  };

  async componentDidMount() {
    const images = await api.get("images");

    this.setState({ images: images.data });
  }
  handleInputChange = e => {
    this.setState({ newProject: e.target.value });
  };
  handleBtn = async e => {
    const { newProject, image } = this.state;
    if (!newProject) {
      e.preventDefault();
      toast.error("Enter a name for your Project");
      console.log("alerta falta nome");
    }
    if (image === 0) {
      e.preventDefault();
      toast.error("Choose an image for your project");
    }
    const url = await api.get(`images/${image}`);
    const response = await api.get("projets");
    const id = response.data.length;
    console.log(id);
    await api.post("/projets", {
      id: id + 1,
      title: newProject,
      tasks: [],
      img: url.data.url
    });
  };
  handleSelect = id => {
    this.setState({ image: id });
  };
  henderSelect = id => {
    const { image } = this.state;
    if (image === id) {
      return <MdDone size={50} color="#fff" />;
    }
  };
  render() {
    const { images, newProject } = this.state;
    return (
      <>
        <AddContainer>
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
              <Button onClick={() => this.handleSelect(image.id)}>
                <img src={image.url} alt={image.id} />
                {this.henderSelect(image.id)}
              </Button>
            </Box>
          ))}
        </Container>
      </>
    );
  }
}
