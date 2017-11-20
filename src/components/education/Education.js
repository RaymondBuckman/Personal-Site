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
                <ul id="education-list" className="scrollmagic-fade-in">
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
                            <p>The app sends data to the drone's microcontroller via UDP (User Datagram Protocol) over the drone's Wifi connection. The UDP packets then get decoded & translated into PWM signals, which get sent to the flight controller board.</p>
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
                            <p>The board contains a 32-bit ARM processor along with several sensors, including a gyroscope. It takes in directional control data from the user in the form of PWM signals, reads the data in real time, then outputs PWM signals to the motors.</p>
                        </span>
                    </li>
                    <li className="flex-item scrollmagic-circle">
                        <div></div>
                        <span className="text-container">
                            <h2>Parts List</h2>
                            <p> &#8226; ST450 Kit Quadcopter Folding Frame<br/>
                                &#8226; 4 KA20-22L 924KV Brushless Motors<br/>
                                &#8226; DYS 30A Brushless ESC<br/>
                                &#8226; APC 10x4.7 propeller set<br/>
                                &#8226; FunFly Controller "Naze32"<br/>
                                &#8226; ArduCopter 3DR PDB<br/>
                                &#8226; Mbed NXP LPC 1768<br/>
                                &#8226; Roving Networks WiFly 2.21 RC<br/>
                                &#8226; Voltz 2200 mAh battery                         
                            </p>
                        </span>
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
