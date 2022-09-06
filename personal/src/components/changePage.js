import React, { Component } from "react";
import { 
    Link,
    Route,
    Routes,
    BrowserRouter as Router,
 } from 'react-router-dom';
import Resume from "./resume";
import Bio from "./bio";

export default class ChangePage extends Component {
    render(){
        return (
            <Router>
                <div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/resume">Resume</Link>
                    </nav>
                    <Routes>
                        <Route exact path="/" Component={Bio} />
                        <Route path="/resume" Component={Resume}/>
                    </Routes>
                </div>
            </Router>
          );
    }

}