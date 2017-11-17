import React, { Component } from 'react';
import cameraVideo from '../../images/camera-video.mp4';


class VolumteerWork extends Component {
    render() {
        return(
        <div>
            <div id="jump-to-volunteer-work" className="Volunteer-1">
                    <ul className="flex-container">
                        <li className="flex-item">
                            <div id="volunteer-window" className="scrollmagicWindow">
                                <video preload="preload" id="volunteer-video" autoPlay="autoplay" loop="loop" muted>
                                    <source src={cameraVideo} type="video/mp4"></source>
                                </video>
                            </div>
                        </li>
                        <li className="flex-item">
                            <h1 id="volunteer-work"  className="scrollmagic-fade-in" tabIndex="0">Vol<span id="volunteer-work_unt">unt</span>eer Wo<span id="volunteer-work_rk">rk</span></h1>
                            <p id="volunteer-paragraph" className="scrollmagic-fade-in">
                                Since February 2016, I've been volunteering as a cameraman for a local church. My resonsiblity is to track the pastor during sermons & to perform panning & zoom transitions during worship. The sermons last an hour & I usually do one to two sermons every other week. I've also done voluneer work as a food packager for the San Diego Food Bank, where I worked four hours/day packaging food for the elderly for two months.
                            </p>
                        </li>
                    </ul>
            </div>
            <div className="Volunteer-2">
                <div className="Volunteer-2-blurred"></div>
            </div>
            <div className="Volunteer-3"></div>
        </div>         
        );
    }
}

export default VolumteerWork;

            
