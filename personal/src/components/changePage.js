import React, { Component } from "react";
import { 
    Link
 } from 'react-router-dom';

export default class ChangePage extends Component {
    render(){
        return (
                <div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/resume">Resume</Link>
                    </nav>
                </div>
          );
    }

}