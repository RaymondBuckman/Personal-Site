import React, { Component } from 'react';
import tennis from '../../images/Tennis-100.png';
import controller from '../../images/Controller Filled-100.png';
import dj from '../../images/DJ Filled-100.png';
import travel from '../../images/Controller Filled-100.png';
import foreign from '../../images/Language-100.png';
import weightlifting from '../../images/Weightlifting-100.png';
import running from '../../images/Exercise Filled-100.png';
import cars from '../../images/Car Rental Filled-100.png';
import pingpong from '../../images/Ping Pong Filled-100.png';
import geography from '../../images/Globe Earth-100.png';
import health from '../../images/Heart Health Filled-100.png';
import pets from '../../images/Dog-100.png';



class Hobbies extends Component {
    render() {
        return(
        <div>
            <div id="jump-to-hobbies" className="Hobbies-1">
                <div className="container">
                    <div className="row">
                            <header id="hobbies" className="scrollmagic-fade-in" tabIndex="0">Ho<span id="hobbies_bb">bb</span>ies</header>
                    </div>
                    <div className="row">
                        <div id="hobby-icons">
                            <img className="col-md-1 col-sm-2 col-xs-2" src={tennis} title="Tennis" width="100" data-toggle="tooltip" data-animation="true"  data-placement="bottom"/>
                            <img className="col-md-1 col-sm-2 col-xs-2" src={controller} title="Gaming" width="100" data-toggle="tooltip" data-animation="true"  data-placement="bottom"/>
                            <img className="col-md-1 col-sm-2 col-xs-2" src={dj} title="Music production" width="100" data-toggle="tooltip" data-animation="true"  data-placement="bottom"/>
                            <img className="col-md-1 col-sm-2 col-xs-2" src={travel} title="Travel" width="100" data-toggle="tooltip" data-animation="true"  data-placement="bottom"/>
                            <img className="col-md-1 col-sm-2 col-xs-2" src={foreign} title="Foreign Languages" width="100" data-toggle="tooltip" data-animation="true"  data-placement="bottom"/>
                            <img className="col-md-1 col-sm-2 col-xs-2" src={weightlifting} title="Weight Lifting" width="100" data-toggle="tooltip" data-animation="true"  data-placement="bottom"/>
                            <img className="col-md-1 col-sm-2 col-xs-2 hobby-icons-buffer" src={running} title="Running" width="100" data-toggle="tooltip" data-animation="true"  data-placement="bottom"/>
                            <img className="col-md-1 col-sm-2 col-xs-2 hobby-icons-buffer" src={cars} title="Cars" width="100" data-toggle="tooltip" data-animation="true"  data-placement="bottom"/>
                            <img className="col-md-1 col-sm-2 col-xs-2 hobby-icons-buffer" src={pingpong} title="Ping pong" width="100" data-toggle="tooltip" data-animation="true"  data-placement="bottom"/>
                            <img className="col-md-1 col-sm-2 col-xs-2 hobby-icons-buffer" src={geography} title="Geography & History" width="100" data-toggle="tooltip" data-animation="true"  data-placement="bottom"/>
                            <img className="col-md-1 col-sm-2 col-xs-2 hobby-icons-buffer" src={health} title="Health & Nutrition" width="100" data-toggle="tooltip" data-animation="true"  data-placement="bottom"/>
                            <img className="col-md-1 col-sm-2 col-xs-2 hobby-icons-buffer" src={pets} title="Pets" width="100" data-toggle="tooltip" data-animation="true"  data-placement="bottom"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Hobbies-2"></div>
        </div>
        );
    }
}

export default Hobbies;
