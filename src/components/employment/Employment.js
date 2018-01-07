import React, { Component } from 'react';
import drillVideo from '../../images/drill-video.mp4';

export default class Employment extends Component {
    render() {
        return(
        <div>             
            <div className="Employment-1">
                <ul className="flex-container">
                    <li className="flex-item">
                        <div id="employment-window" className="scrollmagicWindow">
                            <video preload="preload" id="employment-video" autoPlay="autoplay" loop="loop" muted>
                                <source src={drillVideo} type="video/mp4"></source>
                            </video> 
                        </div>
                    </li>
                    <li id="jump-to-employment" className="flex-item">
                        <h1 id="employment" className="scrollmagic-fade-in" tabIndex="0">
                            <span id="employment-E">E</span>mplo<span id="employment-y">y</span>me<span id="employment-n">n</span>t
                        </h1><br/>
                        <p id="employment-paragraph" className="scrollmagic-fade-in">What have I been doing since graduation? Everything you see on HGTV! Painting, demolition, kitchen design, installing back splash, managing workers, pest control, installing cabinets, maintaining properties...you name it, I've done it. What does this have to do with front end web develoment, you ask? It shows I can work long hours, perform under pressure, communicate well, & make tough decisions quickly. I also believe that my love of sleek, consistent, & modern design comes through on both this site & other projects on my <a id="github-page" href="https://github.com/RaymondBuckman" target="_blank">GitHub page</a>. I've also done a brief stint as an exhibitor at ARM TechCon. </p>
                    </li>
                </ul>
            </div>
            <div className="Employment-2"></div>
        </div>           
        );
    }
}
