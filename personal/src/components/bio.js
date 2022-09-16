import React, { Component } from "react";
import { TypeAnimation } from 'react-type-animation';

export default class Bio extends Component {
    render(){
        return(
            <div className="bio">
                <div className="bio-section">
                    <TypeAnimation
                        // Same String at the start will only be typed once, initially
                        sequence={[
                        "Hi! I'm Jack Vasu",
                        2000,
                        "Hi! I'm a Software Engineer",
                        2000,
                        "Hi! I'm a Bostonian",
                        2000,
                        "Hi! I'm a Tennis Enthusiast",
                        2000,
                        "Hi! I'm Jack Vasu",
                        2000,
                        ]}
                        speed={30} // Custom Speed from 1-99 - Default Speed: 40
                        wrapper="span" // Animation will be rendered as a <span>
                        className="text-typing"
                    />
                </div>
                <div className="bio-text"> 
                    <div className="text-section sec">
                        <div className="text-header">
                            Who
                        </div>
                        <div className="text-header sub">
                            I am
                        </div>
                        <div className="text-body">
                        Welcome to my site! I'm Jack Vasu, a Dartmouth College '22 based in San Francisco. 
                        I majored in Computer Science with a minor in Environmental Studies. In my free time I play tennis, 
                        hike, travel, and lose chess matches. If you want to chat, my socials are listed above. 
                        </div>
                    </div>
                    <div className="text-section">
                        <div className="text-header">
                            What
                        </div>
                        <div className="text-header sub">
                            I do
                        </div>      
                        <div className="text-body">
                        I'm a Software Engineer II for Walmart eCommerce. My focus is backend development using the Spring stack.
                        I also have experience working with React, Python, C# among other languages. I have a passion for backend and machine learning work.
                        Take a look at some of my projects on my resume page!
                        </div>
                    </div>
                    <div className="text-section sec">
                        <div className="text-header">
                            Why
                        </div>
                        <div className="text-header sub">
                            I do it
                        </div>
                        <div className="text-body">
                        I believe coding can be used as a tool to tackle the issues of tomorrow. At Dartmouth, I became passionate about just that. 
                        Inspired by a Virtual Reality Computer Science class I took in my Sophomore spring, I joined the selective, cutting-edge Dartmouth Robertson Autism VR lab. Professor Robertson and her team
                        study how VR can be used to diagnose neurological disorders.
                        Along with scripting tests for the team, I designed and implemented a full stack VR patient authentication system using C#, Unity and Dropbox.
                        </div>
                    </div>
                </div>
            </div>
        );
        }
    }
