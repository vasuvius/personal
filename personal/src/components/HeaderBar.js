import React, { Component } from "react";
import RoundedProfile from "./RoundedProfile";
import ChangePage from "./changePage";

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
            <ChangePage />
            </div>
        );
    }

}