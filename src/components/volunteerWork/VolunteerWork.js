import React, { Component } from 'react';
import cameraVideo from '../../images/camera-video.mp4';

export default class VolunteerWork extends Component {
    render() {
        return(
        <div>
            <div className="volunteer-1-div">
                    <ul className="flex-container">
                        <li className="flex-item">
                            <div id="volunteer-window" className="scrollmagicWindow">
                                <video preload="preload" id="volunteer-video" autoPlay="autoplay" loop="loop" muted>
                                    <source src={cameraVideo} type="video/mp4"></source>
                                </video>
                            </div>
                        </li>
                        <li id="jump-to-volunteer-work" className="flex-item">
                            <h1 id="volunteer-work"  className="scrollmagic-fade-in" tabIndex="0">
                                Vol<span id="volunteer-work-u">u</span>nteer <span id="volunteer-work-W">W</span>or<span id="volunteer-work-k">k</span>
                            </h1>
                            <p id="volunteer-paragraph" className="scrollmagic-fade-in">
                                Since February 2016, I've been volunteering as a cameraman for the media team at a local church. My job is to track the pastor during sermons as well as performing panning & zoom transitions during worship. The sermons last about an hour & I usually do one to two sermons every other week. Working as part of a camera crew requires teamwork, great communicatoon, & on-the-fly decision-making abilities. I've also done voluneer work as a food packager for the San Diego Food Bank, where I worked four hours a day packaging food for the elderly for two months.
                            </p>
                        </li>
                    </ul>
            </div>
            <div className="volunteer-2-div">
                <div className="volunteer-2-blurred-div"></div>
            </div>
            <div className="volunteer-3-div"></div>
        </div>         
        );
    }
}

            
