import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../images/profile.jpg";

export default class RoundedProfile extends Component {
  render() {
    return (
      <div>
        <ReactRoundedImage
          image={MyPhoto}
          roundedColor="#006623"
          imageWidth="125"
          imageHeight="125"
          roundedSize="13"
          borderRadius="70"
        />
      </div>
    );
  }
}