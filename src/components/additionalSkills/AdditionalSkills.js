import React, { Component } from 'react';


class AdditionalSkills extends Component {
    render() {
        return(
        <div>
            <div id="jump-to-additional-skills" className="Skills-1">
                <header id="additional-skills" className="scrollmagicFadeIn">
                    Add<span id="additional-skills_iti">iti</span>onal Ski<span id="additional-skills_ll">ll</span>s
                </header>
                <ul id="skill-list"  className="scrollmagicFadeIn">
                    <li>Atom/Brackets</li><br/>
                    <li>Notepad++</li><br/>
                    <li>MS Visual Studio</li><br/>
                    <li>Eclipse</li><br/>
                    <li>Git & GitHub</li><br/>
                    <li>Microsoft Office</li><br/>
                    <li>Adobe Photoshop</li><br/>
                    <li>Français (intermédiaire)</li><br/>
                    <li>Deutsch (anfänger)</li>
                </ul>
            </div>
            <div className="Skills-2">
                <div className="container">
                    <div className="row">
                        <header id="french" className="col-sm-2.5 col-sm-offset-1 scrollmagicFadeIn" data-toggle="tooltip" data-delay="400" data-animation="true" data-easein="perspectiveLeftIn" data-placement="right" title="Mon niveau de compétence: Intermédiaire">Bon travail!</header>
                    </div> 
                </div>
            </div>
            <div className="Skills-3">
                <div className="container">
                    <div className="row">
                        <header id="german" className="col-xs-2.5 col-xs-offset-9 scrollmagicFadeIn" data-toggle="tooltip" data-delay="400" data-animation="true" data-easein="perspectiveRightIn"  data-placement="left" title="Mein Niveau:Anfänger">Ausgezeichnet!</header>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default AdditionalSkills;
