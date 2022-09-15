import React, { Component } from "react";
import { 
    Link
 } from 'react-router-dom';

export default class ChangePage extends Component {
    render(){
        return (
                <div>
                    <nav className="cl-effect-1">
                        <Link to="/">Bio</Link>
                        <Link to="/resume">Resume</Link>
                    </nav>
                </div>
          );
    }

}