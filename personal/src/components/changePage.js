import React, { Component } from "react";
import { 
    Link
 } from 'react-router-dom';

export default class ChangePage extends Component {
    render(){
        return (
                <div>
                    <nav className="cl-effect-1">
                        <Link className="link-item" to="/">Bio</Link>
                        <Link className="link-item" to="/resume">Resume</Link>
                    </nav>
                </div>
          );
    }

}