import React, { Component } from "react";
import Axios from "axios";

export default class Pokemon extends Component {
  state = {
    name: "",
    pokemonIndex: "",
    imageUrl: ""
  };

  async componentDidMount() {
    //pokemonIndex = 1/2 according to the position that the link pass
    const { pokemonIndex } = this.props.match.params;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <span></span>
      </div>
    );
  }
}
