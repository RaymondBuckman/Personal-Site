import React, { Component } from 'react';

class AdditionalSkills extends Component {
    render() {
        return(
        <div>
            <div id="jump-to-additional-skills" className="Skills-1">
                <h1 id="additional-skills" className="scrollmagic-fade-in" tabIndex="0">
                    Add<span id="additional-skills_iti">iti</span>onal Ski<span id="additional-skills_ll">ll</span>s
                </h1>
                <ul id="skill-list"  className="scrollmagic-fade-in">
                    <li>Webpack3/Grunt</li><br/>
                    <li>Node.js</li><br/>
                    <li>Atom/Brackets</li><br/>
                    <li>Notepad++</li><br/>
                    <li>MS Visual Studio</li><br/>
                    <li>Eclipse</li><br/>
                    <li>Git & GitHub</li><br/>
                    <li>Microsoft Office</li><br/>
                    <li>Adobe Photoshop</li><br/>
                    <li>Français (intermediare)</li><br/>
                    <li>Deutch (Anfänger)</li>
                </ul>
            </div>
            <div className="Skills-2"></div>
            <div className="Skills-3"></div>
        </div>
        );
    }
}

export default AdditionalSkills;
