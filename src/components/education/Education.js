import React, { Component } from 'react';


class Education extends Component {
    render() {
        return(
        <div>
            <div className="Education-1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-1 col-xs-8 col-xs-offset-1">
                            <header id="education" className="scrollmagicFadeIn">
                                <span id="education_E">E</span><span id="education_d">d</span><span id="education_u">u</span><span id="education_ca">ca</span><span id="education_ti">ti</span><span id="education_on">on</span>
                            </header>
                            <header className="scrollmagicFadeIn">Bachelor's of Science<br/>
                                    Computer Engineering<br/>
                                    San Jose State University
                            </header>
                        </div>
                        <ul id="courseList" className="col-md-3 col-md-offset-1 col-xs-8 col-xs-offset-1 scrollmagicFadeIn">
                            <li>Operating Systems</li>
                            <li>Database Systems I</li>
                            <li>Computer Architecture</li>
                            <li>Digital Design I & II</li>
                            <li>Algorithms & Data Structures</li>
                            <li>Computer Networking</li>
                            <li>Advanced Algorithm Design</li>
                            <li>Microprocessor Design</li>
                            <li>Embedded Systems</li>
                        </ul>
                        <div id="divOutsideProjecsButton" className="col-md-2 col-md-offset-9 col-xs-2 col-xs-offset-2 scrollmagicFadeIn">
                            <button id="projects-button" type="button" className="btn btn-lg" data-toggle="modal" data-target="#projectsModal">Senior Project</button>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="Education-2">
                <div className="container-fluid">
                    <div className="row">
                        <header id="online-courses" className="scrollmagicFadeIn">
                            On<span id="online_li">li</span>ne Cours<span id="online_e">e</span>s
                        </header>
                        <ul id="online-list" className="scrollmagicFadeIn">
                            <li>CSS:Core Concepts</li><br/>
                            <li>JavaScript Essential Training</li><br/>
                            <li>User Experience for Web Design</li><br/>
                            <li>Bootstrap 3 Essential Training</li><br/>
                            <li>Learn React.js: The Basics</li><br/>
                            <li>Responsive Design Fundamentals</li><br/>
                            <li>Foundations of UX: Accessibility</li><br/>
                            <li>HTML Essential Training</li><br/>
                            <li>Up & Running with Git & GitHub </li><br/>
                            <li>Foundations of Programming: Fundamentals</li><br/>
                            <li>Sass Essential Training</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Education;
