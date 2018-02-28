import React, { Component } from 'react';
import linkedIn from '../../images/linkedin-icon.png';
import github from '../../images/github-icon.png';
import icons8 from '../../images/icons8-icon.png';
import pexels from '../../images/pexels-icon.png';
import downArrowSidebar from '../../images/down-arrow.png';
import $ from "jquery";

var laptopsAndDesktops = window.matchMedia( "(min-width: 1420px)" );

export default class Sidebar extends Component {
    render() {
        function toggleGithubProjects(e){
            e.stopPropagation();
            $('#github-projects').toggle(); 
        }
        
        function toggleDjokovicPreview(e){
            e.stopPropagation();
            if(laptopsAndDesktops.matches){
                $('#djokovic-preview').toggle(); 
            }
        }
        
        function toggleM2Preview(e){
            e.stopPropagation();
            if(laptopsAndDesktops.matches){
                $('#m2-preview').toggle(); 
            }
        }
        
        function toggleTheWinterWarPreview(e){
            e.stopPropagation();
            if(laptopsAndDesktops.matches){
                $('#the-winter-war-preview').toggle(); 
            }
        }
        
        function toggleTurkeyPreview(e){
            e.stopPropagation();
            if(laptopsAndDesktops.matches){
                $('#turkey-preview').toggle(); 
            }
        }
        
        return(
        <div>
            <div className="sidebar-window">
                <div></div>
                <span className="text-container">
                    <h2>Me</h2>
                </span>
            </div>
            <ul className="sidebar-nav">                
                <li>
                    <a className="main-sidebar-links" href="https://www.linkedin.com/in/raymondbuckman" target="_blank" rel="noopener">
                        Linked In<span className="pull-right"><img src={linkedIn} alt="" width="30" height="30"></img></span>
                    </a>
                </li>
                <li className="main-sidebar-links" onClick={toggleGithubProjects}>
                    Github <span id="down-caret">&#9663;</span><span className="pull-right"><img id="github-logo" src={github} alt="toggle github projects" width="25" height="25"></img></span>
                    <ul id="github-projects">
                        <li>
                            <a className="toggle-sidebar-links" href="https://github.com/RaymondBuckman/Djokovic" target="_blank" rel="noopener" onMouseEnter={toggleDjokovicPreview} onMouseLeave={toggleDjokovicPreview}>
                                <span className="sidebar-first-letter">D</span>jokovic<span className="pull-right"></span>
                            </a>
                        </li>
                        <li>
                            <a className="toggle-sidebar-links" href="https://github.com/RaymondBuckman/M2" target="_blank" rel="noopener" onMouseEnter={toggleM2Preview} onMouseLeave={toggleM2Preview}>
                                <span className="sidebar-first-letter">M</span>2<span className="pull-right"></span>
                            </a>
                        </li>
                        <li>
                            <a className="toggle-sidebar-links" href="https://github.com/RaymondBuckman/The-Winter-War" target="_blank" rel="noopener" onMouseEnter={toggleTheWinterWarPreview} onMouseLeave={toggleTheWinterWarPreview}>
                                <span className="sidebar-first-letter">T</span>he Winter War<span className="pull-right"></span>
                            </a>
                        </li>
                        <li>
                            <a className="toggle-sidebar-links" href="https://github.com/RaymondBuckman/Turkey" target="_blank" rel="noopener" onMouseEnter={toggleTurkeyPreview} onMouseLeave={toggleTurkeyPreview}>
                                <span className="sidebar-first-letter">T</span>urkey<span className="pull-right"></span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="main-sidebar-links" href="https://icons8.com/" target="_blank" rel="noopener">
                        Icons8<span className="pull-right"><img id="icons8-logo" src={icons8} alt="" width="30" height="30"></img></span>
                    </a>
                </li>
            </ul>
            <div id="bottom-sidebar-image"></div>
        </div>
        );
    }
}
