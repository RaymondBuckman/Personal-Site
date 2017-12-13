import React, { Component } from 'react';
import linkedIn from '../../images/linkedin-icon.png';
import github from '../../images/github-icon.png';
import icons8 from '../../images/icons8-icon.png';
import pexels from '../../images/pexels-icon.png';
import $ from "jquery";

class Sidebar extends Component {
    render() {
        return(
        <div>
            <ul className="sidebar-nav">
                <div className="sidebar-window">
                    <div></div>
                    <span className="text-container">
                        <h2>Me</h2>
                    </span>
                </div>                
                <li>
                    <a href="https://www.linkedin.com/in/raymondbuckman" target="_blank">
                        <span className="sidebar-first-letter">L</span>inked In<span className="pull-right"><img src={linkedIn} title="LinkedIn" width="30" height="30"></img></span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/RaymondBuckman" target="_blank">
                        <span className="sidebar-first-letter">G</span>ithub<span className="pull-right"><img id="github-logo" src={github} title="GitHub" width="30" height="30"></img></span>
                    </a>
                </li>
                <li>
                    <a href="https://icons8.com/" target="_blank">
                        <span className="sidebar-first-letter">I</span>cons8<span className="pull-right"><img id="icons8-logo" src={icons8} title="Icons8 Filled" width="30" height="30"></img></span>
                    </a>
                </li>
                <li>
                    <a href="https://www.pexels.com/" target="_blank">
                        <span className="sidebar-first-letter">P</span>exels<span className="pull-right"><img id="icons8-logo" src={pexels} title="Icons8 Filled" width="30" height="30"></img></span>
                    </a>
                </li>
            </ul>
            <div id="bottom-sidebar-image"></div>
        </div>
        );
    }
}

export default Sidebar;
