import React, { Component } from 'react';

export default class Languages extends React.Component {
    render() {
        return(
        <div>
            <div id="jump-to-languages" className="languages-1-div">
                <h1 id="languages" className="scrollmagic-fade-in" tabIndex="0">
                    Lan<span id="languages-g">g</span>uag<span id="languages-e">e</span>s & Li<span id="languages-b">b</span>ra<span id="languages-r">r</span>ies
                </h1>
                <ul id="language-list"  className="scrollmagic-fade-in">
                    <li>HTML5/CSS3</li><br/>
                    <li>Javascript</li><br/>
                    <li>JQuery</li><br/>
                    <li>Bootstrap 3 & 4</li><br/>
                    <li>Sass (Scss)</li><br/>
                    <li>React.js</li><br/>
                    <li>Java</li><br/>
                    <li>SQL</li>
                </ul>
            </div> 
            <div className="languages-2-div"></div>
        </div>
        );
    }
}
