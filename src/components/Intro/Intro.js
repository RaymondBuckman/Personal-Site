import React, { Component } from 'react';
//import logo from '../../logo.svg';

class Intro extends Component {
    render() {
        return(
        <div> 
            <div className="Intro-1" id="top-of-page">
                <div className="container-fluid">
                    <div className="row">
                        <div id="name" className="col-lg-10 col-lg-offset-1 col-xs-8 col-xs-offset-2 text-center">
                            <span id="name_R">R</span><span id="name_a">a</span><span id="name_y">y</span><span id="name_m">m</span><span id="name_o">o</span><span id="name_nd">nd</span>
                            <span id="name_B">B</span><span id="name_uc">uc</span><span id="name_k">k</span>ma<span id="name_n">n</span>
                        </div>
                        <div className="col-md-4 col-md-offset-4 text-center">
                            <span id="dArrow1" className="glyphicon glyphicon-menu-down"></span>
                        </div>
                    </div>
                </div> 
            </div>
            
            
            <div className="Intro-2" id="arrow-dest">
                <ul className="flex-container">
                    <li className="flex-item">
                        <div className="scrollmagicWindow window1" id="window-1"></div>
                    </li>
                    <li className="flex-item">
                        <h1 id="aboutMe" className="scrollmagicFadeIn">Ab<span id="aboutMe_o">o</span><span id="aboutMe_ut">ut</span> <span id="aboutMe_M">M</span><span id="aboutMe_e">e</span>
                        </h1><br/>
                        <p id="aboutMe-paragraph" className="scrollmagicFadeIn">I am an enthusiastic, driven college graduate looking for a rewarding entry-level position in tech. Currently, I am seeking employment opportunities that will both challenge me &
                        allow me to grow within the company. Specific fields that are of interest to me are web development, software-engineering and QA. The phrase "learn something new every day" is something that I truly take to heart. I have a passion for acquiring new knowledge both relating to my career path & about the world around me. I consider myself a citizen of the world & would be completely open to opportunities abroad. People who know me would say that I am a pleasure to work with. I am a great team-player who can meet deadlines & exceed expectations. I am also keeping my skill set up-to-date, as well as learning new languages, both coding & spoken. Feel free to reach out if you're interested! </p>
                    </li>
                </ul>
            </div>
            
            
            
            <nav className="navbar navbar-default hidden-xs" role="navigation">
                <div className="container">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#education">Education</a></li>
                        <li><a href="#languages">Languages</a></li>
                        <li><a href="#additionalSkills">Additional Skills</a></li>
                        <li><a href="#vWork">Volunteer Work</a></li>
                        <li><a href="#hobbies">Hobbies</a></li>
                    </ul>
                </div>
            </nav>
        </div>           
        );
    }
}

export default Intro;