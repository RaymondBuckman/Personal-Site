import React, { Component } from 'react';

export default class AdditionalSkills extends Component {
    render() {
        return(
        <div>
            <div id="jump-to-additional-skills" className="skills-1-div">
                <h1 id="additional-skills" className="scrollmagic-fade-in" tabIndex="0">
                    A<span id="additional-skills-d">d</span>ditional <span id="additional-skills-S">S</span>ki<span id="additional-skills-l">l</span>ls
                </h1>
                <ul id="skill-list"  className="scrollmagic-fade-in">
                    <li>Webpack3/Grunt</li><br/>
                    <li>Node.js</li><br/>
                    <li>GreenSock Animation Platform</li><br/>
                    <li>ScrollMagic</li><br/>
                    <li>Particles.js</li><br/>
                    <li>Atom/Brackets</li><br/>
                    <li>Notepad++</li><br/>
                    <li>MS Visual Studio</li><br/>
                    <li>Eclipse</li><br/>
                    <li>Git & GitHub</li><br/>
                    <li>Microsoft Office</li><br/>
                    <li>Adobe Photoshop</li><br/>
                    <li>Français (intermediare)</li><br/>
                    <li>Deutsch (Anfänger)</li>
                </ul>
            </div>
            <div className="skills-2-div"></div>
            <div className="skills-3-div"></div>
        </div>
        );
    }
}
