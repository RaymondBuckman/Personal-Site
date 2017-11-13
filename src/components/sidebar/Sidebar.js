import React, { Component } from 'react';
//import arrowRed from '../../img/arrow-red.png';
//import arrowLightBlue from '../../img/arrow-light-blue.png';
//import arrowDarkBlue from '../../img/arrow-dark-blue.png';
import $ from "jquery";
//import Draggable from "gsap/Draggable";


class Sidebar extends Component {
    render() {
        return(
        <div>
            <ul className="sidebar-nav">
                <div className="profile-image">
                    <div></div>
                    <h2>Me</h2>
                </div>                
                <li>
                    <a href="https://www.linkedin.com/in/raymondbuckman" target="_blank">
                        <span className="sidebar-first-letter">L</span>inked In<span className="pull-right"><img src="https://png.icons8.com/linkedin/color/96" title="LinkedIn" width="30" height="30"></img></span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/RaymondBuckman" target="_blank">
                        <span className="sidebar-first-letter">G</span>ithub<span className="pull-right"><img id="github-logo" src="https://png.icons8.com/github/win10/96" title="GitHub" width="30" height="30"></img></span>
                    </a>
                </li>
                <li>
                    <a href="https://icons8.com/" target="_blank">
                        <span className="sidebar-first-letter">I</span>cons8<span className="pull-right"><img id="icons8-logo" src="https://png.icons8.com/icons8-filled/ios7/100" title="Icons8 Filled" width="30" height="30"></img></span>
                    </a>
                </li>
            </ul>
            <div id="bottom-sidebar-image"></div>
        </div>
        );
    }
}

export default Sidebar;
