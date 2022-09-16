import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../images/profile.jpg";

export default class RoundedProfile extends Component {
  render() {
    return (
      <div>
        <ReactRoundedImage
          image={MyPhoto}
          roundedColor="#1b1e23"
          imageWidth="75"
          imageHeight="75"
          roundedSize="6"
          borderRadius="70"
        />
      </div>
    );
  }
}