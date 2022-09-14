import React, { Component } from "react";

export default class Resume extends Component {
    render(){
        const res = [
            {
                "title": "Incoming Software Engineer II, Walmart eCommerce",
                "date": "October 2022 -",
                "desc":"Working under Chintan Shah on the Hyperloop team."
        },
            {
                "title": "Software Engineer Intern, Walmart eCommerce",
                "date": "June 2021-August 2021",
                "desc":"Migrated team search platform from Solr to Elasticsearch using Spring Boot. Built new Elasticsearch cluster with Kibana data visualization dashboard tools. Streamlined data indexing resulting in a 75% reduction in server costs for the Item Status API team."
        },
            {
                "title":"Research Scholar, Robertson Autism Resarch Lab",
                "date": "June 2020-June 2021",
                "desc":"Designed and implemented a user authentication system that allows multiple research subjects to use the same VR headset without overlapping data issues. Built using PHP, C#, and Unity. Created a VR consent screen to increase awareness of patient rights. Built using C# and Unity."
        },
            {
                "title": "Software Engineer Intern, StudyMaker LLC",
                "date": "June 2019-August 2019",
                "desc": "Redesigned and implemented client interface using JS, HTML/CSS in order to enhance website usability."
            }
        ]
        const educ = [
            {
                "title":"Dartmouth College",
                "date":"September 2019-June 2022",
                "desc":"Graduated with a Major in Computer Science with a minor in Environmental Studies. Participated in DREAM, Club Tennis, Robertson Lab Research Assistant, and Alpha Chi Alpha."
            }
        ]
        return(
            <div className="resume">
                <h3> Experience </h3>
                {res.map(function(d){
                    return (
                    <div>
                        <p key={d.title}> {d.title}</p>
                        <p key={d.date}> {d.date} </p>
                        <li key={d.name}>{d.desc}</li>
                    </div>
                    )
                })}
                <h3> Education </h3>
                {educ.map(function(d){
                    return (
                    <div>
                        <p key={d.title}> {d.title}</p>
                        <p key={d.date}> {d.date} </p>
                        <li key={d.name}>{d.desc}</li>
                    </div>
                    )
                })}
            </div>
        );
        }
    }
