import React, { Component } from "react";
import SimplerComponent from "./SimplerComponent";

export default class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: "happy"
    };
  }
  handleClick = () => {
    let moodVar = this.state.mood === "sad" ? "happy" : "sad";
    this.setState({
      mood: moodVar
    });
  };
  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}
