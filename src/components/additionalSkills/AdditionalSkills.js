import React, { Component } from 'react';


class AdditionalSkills extends Component {
    render() {
        return(
        <div>
            <div className="Skills-1">
                <div className="container-fluid">
                    <div className="row">
                        <div id="divOutsideAdditionalSkills" className="col-md-6 col-md-offset-3">
                            <header id="additionalSkills" className="scrollmagicFadeIn">
                                Add<span id="additionalSkills_iti">iti</span>onal Ski<span id="additionalSkills_ll">ll</span>s
                            </header>
                        </div>
                        <ul id="skillList"  className="col-md-2 col-md-offset-5 col-xs-6 col-xs-offset-3 scrollmagicFadeIn">
                            <li>Atom/Brackets</li><br/><span></span>
                            <li>Notepad++</li><br/><span></span>
                            <li>MS Visual Studio</li><br/><span></span>
                            <li>Eclipse</li><br/><span></span>
                            <li>Git & GitHub</li><br/><span></span>
                            <li>Microsoft Office</li><br/><span></span>
                            <li>Adobe Photoshop</li><br/><span></span>
                            <li>Français (intermédiaire)</li><br/><span></span>
                            <li>Deutsch (anfänger)</li>
                        </ul>
                    </div>
                </div>
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