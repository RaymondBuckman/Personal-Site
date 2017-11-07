import React, { Component } from 'react';


class AdditionalSkills extends Component {
    render() {
        return(
        <div>
            <div id="jump-to-additional-skills" className="Skills-1">
                <header id="additional-skills" className="scrollmagic-fade-in" tabIndex="0">
                    Add<span id="additional-skills_iti">iti</span>onal Ski<span id="additional-skills_ll">ll</span>s
                </header>
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
                </ul>
            </div>
            <div className="Skills-2">
                        <header id="french" className="scrollmagic-fade-in">Bon travail!</header>
            </div>
            <div className="Skills-3">
                        <header id="german" className="scrollmagic-fade-in"> Ausgezeichnet!</header>
            </div>
        </div>
        );
    }
}

export default AdditionalSkills;
