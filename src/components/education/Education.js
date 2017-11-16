import React, { Component } from 'react';
import subwayVideo from '../../images/drone-video.mp4';


class Education extends Component {
    render() {
        return(
        <div>
            <div id="jump-to-education" className="Education-1">
                <h1 id="education" className="scrollmagic-fade-in" tabIndex="0">
                    <span id="education_E">E</span><span id="education_d">d</span><span id="education_u">u</span><span id="education_ca">ca</span><span id="education_ti">ti</span><span id="education_on">on</span>
                </h1>
                <h1 className="scrollmagic-fade-in">Bachelor's of Science<br/>
                    Computer Engineering<br/>
                    San Jose State University
                </h1>
                <ul id="course-list" className="scrollmagic-fade-in">
                    <li>Operating Systems</li><br/>
                    <li>Database Systems I</li><br/>
                    <li>Computer Architecture</li><br/>
                    <li>Digital Design I & II</li><br/>
                    <li>Algorithms & Data Structures</li><br/>
                    <li>Computer Networking</li><br/>
                    <li>Advanced Algorithm Design</li><br/>
                    <li>Microprocessor Design</li><br/>
                    <li>Embedded Systems</li>
                </ul>
            </div>
            <div className="Education-2">
                <ul className="flex-container">
                    <li className="flex-item">
                        <h1 id="senior-project" className="scrollmagic-fade-in" tabIndex="0">
                            Sen<span id="project_io">io</span>r Pro<span id="project_j">j</span>ect
                        </h1></li>
                    <li className="flex-item scrollmagic-circle">
                        <div></div>
                        <h2>Flight Controller Board</h2>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <div>
                            <video preload="preload" id="project-video" autoPlay="autoplay" loop="loop" muted>
                                <source src={subwayVideo} type="video/mp4"></source>
                            </video> 
                        </div>
                        <h2>Demo</h2>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <div></div>
                        <h2>Propellers & Controller</h2>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <div></div>
                        <h2>Drone Structure</h2>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <div></div>
                        <h2>Project Board</h2>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <div></div>
                        <h2>Project Booth</h2>
                    </li>
                </ul>
            </div>
            <div className="Education-3">
                <h1 id="online-courses" className="scrollmagic-fade-in" tabIndex="0">
                    On<span id="online_li">li</span>ne Cours<span id="online_e">e</span>s
                </h1>
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
