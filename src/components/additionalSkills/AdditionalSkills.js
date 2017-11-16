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
                </ul>
            </div>
            <div className="Skills-2">
            {/*<p>Salut! En plus de apprendre des nouveaux langages de programmation, j'apprends aussi des nouvelles langues parlées. Je parle français à un niveau intermédiaire. J'ai eu plusiers de cours de français au lycée, et apres un peu d'annees j'ai decide l'apprendre en permanence. Je peux lire et ecrire mieux que peux parler, mais je m'améliore chaque jour!</p>*/}
            </div>
            <div className="Skills-3">
            {/*<p>Hallo! Ich spreche auch ein bisschen Deutsch. Mein Deutsch ist nicht so gut als mein Französisch. Meine Interesse am Autos ist d!</p>*/}
            </div>
        </div>
        );
    }
}

export default AdditionalSkills;
