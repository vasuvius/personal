import React, { Component } from "react";
import RoundedProfile from "./RoundedProfile";

export default class HeaderBar extends Component {
    render(){
        return(
            <div>
            <p>
                vasujack1@gmail.com
            </p>
            <RoundedProfile />
            <p>
                githubLink
            </p>
            </div>
        );
    }

}