import React, { Component } from 'react';
import subwayVideo from '../../images/drone-video.mp4';

class Education extends Component {
    render() {
        return(
        <div>
            <div id="jump-to-education" className="Education-1">
                <h1 id="education" className="scrollmagic-fade-in" tabIndex="0">
                    <span id="education-E">E</span><span id="education-d">d</span>uca<span id="education-t">t</span>ion
                </h1>
                <h1 className="scrollmagic-fade-in">Bachelor's of Science<br/>
                    Computer Engineering<br/>
                    San Jose State University
                </h1>
                <ul id="education-list" className="scrollmagic-fade-in">
                    <li>Operating Systems</li><br/>
                    <li>Database Systems</li><br/>
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
                            S<span id="senior-project-e">e</span>nior Pro<span id="senior-project-j">j</span>ec<span id="senior-project-t">t</span>
                        </h1></li>
                    <li className="flex-item scrollmagic-circle">
                        <div></div>
                        <span className="text-container">
                            <h2>RC Over IP</h2>
                            <p>Our project, named RC Over IP, was to build a drone controlled via a smartphone app.</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <div>
                            <video preload="preload" id="project-video" autoPlay="autoplay" loop="loop" muted>
                                <source src={subwayVideo} type="video/mp4"></source>
                            </video> 
                        </div>
                        <span className="text-container">
                            <h2>How It Works</h2>
                            <p>The app sends data to the drone's microcontroller over the drone's Wifi. The UDP packets then get decoded & translated into PWM signals, which get sent to the flight controller board.</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <div></div>
                        <span className="text-container">
                            <h2>The App</h2>
                            <p>The app consists of two on-screen joysticks. Each joystick moves in two axes (x and y) for a total of 4 position values:  roll, pitch, yaw and throttle. Those inputs affect the RPM of each of the drone's propellors.</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <div></div>
                        <span className="text-container">
                            <h2>The Frame</h2>
                            <p>The frame is made completely out of aluminum to minimize both weight & damage in case of a crash. Weight distrubtion was key to ensure predictable flight behavior. </p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <div></div>
                        <span className="text-container">
                            <h2>The Flight Controller Board</h2>
                            <p>The board contains a 32-bit ARM processor & several sensors. It takes in the user's directional control data, reads the data, then outputs PWM signals to the motors.</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <div></div>
                        <span className="text-container">
                            <h2>Parts List</h2>
                            <p> &#8226; ST450 Kit Drone Frame<br/>
                                &#8226; 4 KA20-22L 924KV Brushless Motors<br/>
                                &#8226; DYS 30A Brushless ESC<br/>
                                &#8226; APC propeller set<br/>
                                &#8226; FunFly Controller Naze32<br/>
                                &#8226; ArduCopter 3DR PDB<br/>
                                &#8226; Mbed NXP LPC 1768<br/>
                                &#8226; Roving Networks RC<br/>
                                &#8226; Voltz battery                         
                            </p>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="Education-3">
                <h1 id="online-courses" className="scrollmagic-fade-in" tabIndex="0">
                    Onli<span id="online-courses-n">n</span>e Co<span id="online-courses-u">u</span>rs<span id="online-courses-e">e</span>s
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
                    <li>Foundations of Programming</li><br/>
                    <li>Sass Essential Training</li>
                </ul>
            </div>
        </div>
        );
    }
}

export default Education;
