import React, { Component } from "react";
import RoundedProfile from "./RoundedProfile";
import ChangePage from "./changePage";

export default class HeaderBar extends Component {
    render(){
        return(
            <div className="header">
                <div className="header-above">
                    <div className="header-item-profile">
                        <RoundedProfile />
                    </div>
                    <div className="header-item">
                        <a href="mailto: vasujack1@gmail.com">
                            Email
                        </a>
                    </div>
                    <div className="header-item">
                        <a href="https://github.com/vasuvius">
                            Github
                        </a>
                    </div>
                </div>
                <div className="nav-bar">
                    <ChangePage />
                </div>
            </div>
        );
    }

}