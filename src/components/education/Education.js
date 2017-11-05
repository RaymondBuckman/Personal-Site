import React, { Component } from 'react';
import subwayVideo from '../../images/dronevideo.mp4';


class Education extends Component {
    render() {
        return(
        <div>
            <div id="jump-to-education" className="Education-1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-1 col-xs-8 col-xs-offset-1">
                            <header id="education" className="scrollmagic-fade-in"tabIndex="0">
                                <span id="education_E">E</span><span id="education_d">d</span><span id="education_u">u</span><span id="education_ca">ca</span><span id="education_ti">ti</span><span id="education_on">on</span>
                            </header>
                            <header className="scrollmagic-fade-in">Bachelor's of Science<br/>
                                    Computer Engineering<br/>
                                    San Jose State University
                            </header>
                        </div>
                        <ul id="courseList" className="col-md-3 col-md-offset-1 col-xs-8 col-xs-offset-1 scrollmagic-fade-in">
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
                        <div id="divOutsideProjecsButton" className="scrollmagic-fade-in">
                            <button id="projects-button" type="button" className="btn btn-lg" data-toggle="modal" data-target="#projectsModal">Senior Project</button>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="Education-2">
                <ul className="flex-container">
                    <li className="flex-item">
                        <h1 id="senior-project" className="scrollmagic-fade-in" tabIndex="0">
                            Sen<span id="project_io">io</span>r Pro<span id="project_j">j</span>ect
                        </h1></li>
                    <li className="flex-item">
                        <div></div>
                        <h2>Flight Controller Board</h2>
                    </li>
                    <li className="flex-item">
                        <div>
                            <video preload="preload" id="project-video" autoPlay="autoplay" loop="loop" muted>
                                <source src={subwayVideo} type="video/mp4"></source>
                            </video> 
                        </div>
                        <h2>Demo</h2>
                    </li>
                    <li className="flex-item">
                        <div></div>
                        <h2>Propellers & Controller</h2>
                    </li>
                    <li className="flex-item">
                        <div></div>
                        <h2>Drone Structure</h2>
                    </li>
                    <li className="flex-item">
                        <div></div>
                        <h2>Project Board</h2>
                    </li>
                    <li className="flex-item">
                        <div></div>
                        <h2>Project Booth</h2>
                    </li>
                </ul>
            </div>
            <div className="Education-3">
                <header id="online-courses" className="scrollmagic-fade-in" tabIndex="0">
                    On<span id="online_li">li</span>ne Cours<span id="online_e">e</span>s
                </header>
                <ul id="online-list" className="scrollmagic-fade-in">
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
        );
    }
}

export default Education;
