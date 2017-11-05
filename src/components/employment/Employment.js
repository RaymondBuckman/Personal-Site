import React, { Component } from 'react';
import drillVideo from '../../images/drillvideo.mp4';

class Employment extends Component {
    render() {
        return(
        <div>             
            <div className="Employment-1">
                <ul className="flex-container">
                    <li className="flex-item">
                        <div id="employment-window" className="scrollmagicWindow">
                            <video preload="preload" id="drill-video" autoPlay="autoplay" loop="loop" muted>
                                <source src={drillVideo} type="video/mp4"></source>
                            </video> 
                        </div>
                    </li>
                    <li className="flex-item">
                        <h1 id="employment" className="scrollmagic-fade-in" tabIndex="0">
                            Empl<span id="employment_oy">oy</span>ment
                        </h1><br/>
                        <p id="employment-paragraph" className="scrollmagic-fade-in">What have I been doing since graduation? Everything you see on HGTV! Painting, demolition, kitchen design, installing back splash, managing workers, pest control, installing cabinets...you name it, I've done it. What does this have to do with front end web develoment, you ask? Nothing directly, but it shows I can work long hours, perform under pressure, communicate well, be decisive, & get 'er done! I've also done a brief stint as a exhibitor at ARM TechCon. </p>
                    </li>
                </ul>
            </div>
            <div className="Employment-2"></div>
        </div>           
        );
    }
}

export default Employment;
