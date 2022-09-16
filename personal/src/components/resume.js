import React, { Component } from "react";
import walmartLogo from "../images/walmartLogo.jpg";
import robertsonLogo from "../images/robertsonLab.jpg";
import dartmouthLogo from "../images/dartmouthLogo.jpg";
import studymaker from "../images/studymaker.jpg";

export default class Resume extends Component {
    render(){
        const res = [
            {
                "title": "Software Engineer II, Walmart eCommerce",
                "date": "October 2022 -",
                "desc":"Working on the Item Status API team.",
                "tools": "Spring Stack, Github.",
                "styling":"text-section sec",
                "img":walmartLogo
        },
            {
                "title": "Software Engineer Intern, Walmart eCommerce",
                "date": "June 2021 - August 2021",
                "desc":"Migrated Item Status API search platform from Solr to Elasticsearch using Spring Boot. Built new Elasticsearch cluster with Kibana data visualization dashboard tools. Streamlined data indexing resulting in a 75% reduction in server costs for the Item Status API team.",
                "tools": "Spring Stack, Elasticsearch, Solr, Github.",
                "styling":"text-section",
                "img":walmartLogo
            },
            {
                "title":"Research Scholar, Robertson Autism Resarch Lab",
                "date": "June 2020 - June 2021",
                "desc":"Designed and implemented a user authentication system that allows multiple research subjects to use the same VR headset without overlapping data issues. Built using PHP, C#, and Unity. Created a VR consent screen to increase awareness of patient rights. Built using C# and Unity.",
                "tools":"C#, Unity, PHP, DropBox.",
                "styling":"text-section sec",
                "img":robertsonLogo

            },
            {
                "title": "Software Engineer Intern, StudyMaker LLC",
                "date": "June 2019 - August 2019",
                "desc": "Redesigned and implemented client interface using JS, HTML/CSS in order to enhance website usability.",
                "tools": "LAMP stack, GitHub",
                "styling":"text-section",
                "img":studymaker
            }
        ]
        const educ = [
            {
                "title":"Dartmouth College",
                "date":"September 2019 - June 2022",
                "desc":"Graduated with a Major in Computer Science with a minor in Environmental Studies. Participated in DREAM, Club Tennis, Robertson Lab Research Assistant, and Alpha Chi Alpha.",
                "styling":"text-section sec",
                "img":dartmouthLogo
                
            }
        ]
        return(
            <div className="resume">
                <div className="text-breakup"> 
                    Experience 
                </div>
                <div className="bio-text">
                    {res.map(function(d){
                        return (
                        <div className={d.styling}>
                            <div className="text-header" key={d.title}> {d.title}</div>
                            <div className="text-header sub" key={d.date}> {d.date} </div>
                            <div className="text-body" key={d.name}>{d.desc}</div>
                            <div className="text-skills" key={d.tools}> {d.tools}</div>
                            <img src={d.img} className="resume-picture" alt={d.img.name}/>
                        </div>
                        )
                    })}
                </div>
                <div className="text-breakup"> 
                    Education 
                </div>
                <div className="bio-text">
                    {educ.map(function(d){
                        return (
                        <div className={d.styling}>
                            <div className="text-header" key={d.title}> {d.title}</div>
                            <div className="text-header sub"key={d.date}> {d.date} </div>
                            <div className= "text-body" key={d.name}>{d.desc}</div>
                            <img src={d.img} className="resume-picture" alt={d.img.name} />
                        </div>
                        )
                    })}
                </div>
            </div>
        );
        }
    }
