import React, { Component } from "react";
import { TypeAnimation } from 'react-type-animation';

export default class Bio extends Component {
    render(){
        return(
            <div className="bio">
                <TypeAnimation
                    // Same String at the start will only be typed once, initially
                    sequence={[
                    "Hi! I'm Jack Vasu",
                    2000,
                    "Hi! I'm a Software Engineer",
                    2000,
                    "Hi! I'm a tennis player",
                    2000,
                    "Hi! I'm a chess enthusiast",
                    2000,
                    "Hi! I'm Jack Vasu",
                    2000,
                    ]}
                    speed={20} // Custom Speed from 1-99 - Default Speed: 40
                    wrapper="span" // Animation will be rendered as a <span>
                    className="text-typing"
                />
                <div className="bio-text"> 
                    <div className="text-header">
                        Who
                    </div>
                    <div className="text-body">
                    Welcome to my site. I'm Jack Vasu, a Dartmouth College '22 currently based in San Francisco. 
                    I majored in Computer Science with a minor in Environmental Studies. Originally from Boston, I love to play tennis, 
                    hike, travel, and play chess. 
                    </div>
                    <div className="text-header">
                        What
                    </div>    
                    <div className="text-body">
                    In SF I work as a Software Engineer II for Walmart eCommerce. My most recent experience is backend development using the Spring stack.
                    I also have experience working with React, Python, C# among others. I have a passion for backend and machine learning work. 
                    If you have any questions or just want to chat, my contacts are listed above. 
                    </div>
                    <div className="text-header">
                        Why
                    </div>
                    <div className="text-body">
                    I believe coding can be used as a tool to improve lives and tackle the issues of today. In college, I became passionate about just that. 
                    Inspired by a Virtual Reality Computer Science class I took in my Sophomore spring, I joined the selective, cutting-edge Dartmouth Robertson Autism VR lab. Professor Robertson and her team
                    were working to study and eventually diagnose patients with Autism by using Virtual Reality headsets.
                    Along with scripting tests for the team, I designed and implemented a full stack VR patient authentication system using C#, Unity and Dropbox. At the end of the year, I had pushed their research forward and stoked my own iterest in creating impactful designs.
                    Check out more work here.
                    </div>
                </div>
            </div>
        );
        }
    }
