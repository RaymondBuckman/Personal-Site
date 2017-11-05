import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import subwayVideo from '../../images/subwayvideo.mp4';

class Intro extends Component {
    render() {
        return(
        <div> 
            <div className="Intro-1" id="top-of-page">
                        <header id="name">
                            <span id="name_R">R</span><span id="name_a">a</span><span id="name_y">y</span><span id="name_m">m</span><span id="name_o">o</span><span id="name_nd">nd</span>
                            <span id="name_B">B</span><span id="name_uc">uc</span><span id="name_k">k</span>ma<span id="name_n">n</span>
                        </header>
                        <img id="down-arrow" src="https://png.icons8.com/downward-arrow/ios7/73/000000" height="60px" data-tip data-for="scroll" aria-describedby="scroll"></img>            
            </div>
            
            <div className="Intro-2" id="arrow-dest">
                <ul className="flex-container">
                    <li className="flex-item">
                        <div id="intro-window" className="scrollmagicWindow">
                            <video preload="preload" id="subway-video" autoPlay="autoplay" loop="loop" muted>
                                <source src={subwayVideo} type="video/mp4"></source>
                            </video> 
                        </div>
                    </li>
                    <li className="flex-item">
                        <h1 id="about-me" className="scrollmagic-fade-in" tabIndex="0">Ab<span id="about-me_o">o</span><span id="about-me_ut">ut</span> <span id="aboutMe_M">M</span><span id="about-me_e">e</span>
                        </h1><br/>
                        <p id="about-me-paragraph" className="scrollmagic-fade-in">I am an enthusiastic, driven college graduate looking for a rewarding entry-level position in tech. Currently, I am seeking employment opportunities that will both challenge me &
                        allow me to grow within the company. Specific fields that are of interest to me are web development, software-engineering and QA. The phrase "learn something new every day" is something that I truly take to heart. I have a passion for acquiring new knowledge both relating to my career path & about the world around me. I consider myself a citizen of the world & would be completely open to opportunities abroad. People who know me would say that I am a pleasure to work with. I am a great team-player who can meet deadlines & exceed expectations. I am also keeping my skill set up-to-date, as well as learning new languages, both coding & spoken. Feel free to reach out if you're interested! </p>
                    </li>
                </ul>
            </div>
            
            <nav className="navbar navbar-default hidden-xs" role="navigation">
                <div className="container">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#jump-to-education">Education</a></li>
                        <li><a href="#jump-to-languages">Languages</a></li>
                        <li><a href="#jump-to-additional-skills">Additional Skills</a></li>
                        <li><a href="#jump-to-volunteer-work">Volunteer Work</a></li>
                        <li><a href="#jump-to-hobbies">Hobbies</a></li>
                    </ul>
                    <img id="nav-icon" height="40px"></img>
                </div>
            </nav>
            
            <ReactTooltip id="scroll" place="top" type="dark"
            effect="solid" delayShow={300} role="tooltip">
                <span className="tooltip-span">Scroll down</span>
            </ReactTooltip>
        </div>           
        );
    }
}

export default Intro;
