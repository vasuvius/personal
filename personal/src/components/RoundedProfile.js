import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../images/profile.jpg";

export default class RoundedProfile extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <ReactRoundedImage
          image={MyPhoto}
          roundedColor="#006623"
          imageWidth="150"
          imageHeight="150"
          roundedSize="13"
          borderRadius="70"
        />
      </div>
    );
  }
}