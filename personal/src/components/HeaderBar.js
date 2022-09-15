import React, { Component } from "react";
import RoundedProfile from "./RoundedProfile";
import ChangePage from "./changePage";

export default class HeaderBar extends Component {
    render(){
        return(
            <div className="header">
                <div className="header-above">
                    <div className="header-item"> 
                        <h4>
                            Email
                        </h4>
                    </div>
                    <div className="header-item-profile">
                        <RoundedProfile />
                    </div>
                    <div className="header-item">
                        <h4>
                            Github
                        </h4>
                    </div>
                </div>
                <div className="nav-bar">
                    <ChangePage />
                </div>
            </div>
        );
    }

}