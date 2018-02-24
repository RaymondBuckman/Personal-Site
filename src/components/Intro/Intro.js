import React, { Component } from 'react';
import subwayVideo from '../../images/subway-video.mp4';
import $ from 'jquery';

var styles = {
    transparentDownArrow: {
        opacity: '0.5'
    },
    opaqueDownArrow: {
        opacity: '1'
    }, 
};

export default class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            down_arrow_state: 'transparentDownArrow'
        };
    }
    
    scrollDown(e){
    e.preventDefault;
        $('html, body').animate({
            scrollTop: $("#down-arrow-dest").offset().top
        }, 2000);
    } 
    
    opaqueDownArrow(){
        this.setState({
            down_arrow_state: 'opaqueDownArrow'
        });
    }
    
    transparentDownArrow(){
        this.setState({
            down_arrow_state: 'transparentDownArrow'
        });  
    }
    
    render() {     
        return(
        <div> 
            <div className="intro-1-div" id="top-of-page">
                <h1 id="name">
                    <span id="name-R">R</span>ay<span id="name-m">m</span>ond Buc<span id="name-k">k</span>man
                </h1>
                <img id="down-arrow" src="https://png.icons8.com/downward-arrow/ios7/73/ffffff" style={styles[this.state.down_arrow_state]} onClick={this.scrollDown} onMouseEnter={this.opaqueDownArrow.bind(this)} onMouseLeave={this.transparentDownArrow.bind(this)}></img>            
            </div>
            
            <div className="intro-2-div" id="arrow-dest">
                <ul className="flex-container">
                    <li className="flex-item">
                        <div id="intro-window" className="scrollmagicWindow">
                            <video preload="preload" id="intro-video" autoPlay="autoplay" loop="loop" muted>
                                <source src={subwayVideo} type="video/mp4"></source>
                            </video> 
                        </div>
                    </li>
                    <li id="down-arrow-dest" className="flex-item">
                        <h1 id="about-me" className="scrollmagic-fade-in" tabIndex="0">Ab<span id="about-me-o">o</span><span id="about-me-u">u</span>t M<span id="about-me-e">e</span>
                        </h1><br/>
                        <p id="about-me-paragraph" className="scrollmagic-fade-in">I am an enthusiastic, driven freelancer looking for a rewarding entry-level position in tech. Currently, I am seeking employment opportunities that will both challenge me &
                        allow me to grow within the company. Specific fields that are of interest to me are front-end web development, UX design and QA. The phrase "learn something new every day" is something that I truly take to heart. I have a passion for acquiring new knowledge both relating to my career path & about the world around me. I consider myself a citizen of the world & would be completely open to opportunities abroad. People who know me would say that I am a pleasure to work with. I am a great team-player who can meet deadlines & exceed expectations. I am also keeping my skill set up-to-date, as well as learning new languages, both coding & spoken. Feel free to reach out if you're interested! </p>
                    </li>
                </ul>
            </div>
            
            <nav className="navbar navbar-default visible-lg" role="navigation">
                <div className="container">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#jump-to-education">Education</a></li>
                        <li><a href="#jump-to-languages">Languages</a></li>
                        <li><a href="#jump-to-employment">Employment</a></li>
                        <li><a href="#jump-to-additional-skills">Additional Skills</a></li>
                        <li><a href="#jump-to-volunteer-work">Volunteer Work</a></li>
                        <li><a href="#jump-to-hobbies">Hobbies</a></li>
                    </ul>
                    <div id="nav-icon-education"></div>
                    <div id="nav-icon-languages"></div>
                    <div id="nav-icon-employment"></div>
                    <div id="nav-icon-additional-skills"></div>
                    <div id="nav-icon-volunteer-work"></div>
                    <div id="nav-icon-hobbies"></div>                    
                </div>
            </nav>
        </div>           
        );
    }
}
