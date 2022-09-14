import React, { Component } from "react";
import RoundedProfile from "./RoundedProfile";
import ChangePage from "./changePage";

export default class HeaderBar extends Component {
    render(){
        return(
            <div className="header">
                <h4>
                    vasujack1@gmail.com
                </h4>
                <RoundedProfile />
                <h4>
                    githubLink
                </h4>
                <ChangePage />
            </div>
        );
    }

}