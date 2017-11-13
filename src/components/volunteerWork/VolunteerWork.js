import React, { Component } from 'react';
import cameraVideo from '../../images/cameravideo.mp4';


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
                            <ul id="volunteer-list" className="scrollmagic-fade-in">
                                <li>Cameraman</li><br/>
                                <li>Average of 2 hours/week since February 2016</li><br/>
                                <li>Food Packer @ San Diego Food Bank</li><br/>
                                <li>4 hours/day for 2 months</li>
                            </ul>
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

            
