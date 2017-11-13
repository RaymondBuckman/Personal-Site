import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return(
        <div className="Footer-1">
            <div className="container">
                <div className="row">
                    <div className="col-xs-4 text-center">
                        <header id="thanks">Thanks for visiting!</header>
                    </div>
                    <div className="col-xs-4 text-center">
                        <h1 id="end" className="scrollmagic-fade-in" tabIndex="0">End</h1>
                    </div>
                    <div className="col-xs-4 text-center">
                        <a id="icons8" href="https://icons8.com" target="_blank">Icon pack By Icons8</a>
                    </div>
                </div> 
            </div> 
        </div>
        );
    }
}

export default Footer;
