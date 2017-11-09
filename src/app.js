const css = require('./app.scss');
require('./images/favicon.ico');
import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/sidebar/Sidebar';
import Intro from'./components/intro/Intro';
import Education from './components/education/Education';
import Languages from './components/languages/Languages';
import Employment from './components/employment/Employment';
import AdditionalSkills from './components/additionalSkills/additionalSkills';
import VolunteerWork from './components/volunteerWork/VolunteerWork';
import Hobbies from './components/hobbies/Hobbies';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';
import $ from "jquery";

import tennis from './images/tennis.jpg';
import breakdance from './images/breakdance.jpg';
import gaming from './images/gaming.jpg';
import trance from './images/trance.jpg';
import travel from './images/travel.jpg';
import foreign from './images/foreignlanguages.jpg';
import weightlifting from './images/weight-lifting.jpg';
import running from './images/running.jpg';
import cars from './images/cars.jpg';
import pingpong from './images/pingpong.jpg';
import history from './images/history.jpg';
import health from './images/health.jpg';
import pets from './images/pets.jpg';

import {TweenMax, Power2, TimelineLite} from "gsap";
import scrollTo from '../node_modules/gsap/ScrollToPlugin';
import ScrollMagic from 'scrollmagic';
import ReactTooltip from 'react-tooltip';

import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';


ReactDOM.render(
    <div className="App">
        <div id="wrapper">
            <div id="sidebar-wrapper">
                <Sidebar />
            </div>
            <img id="menu" src="https://png.icons8.com/xbox-menu/ios7/73/ffffff" height="40px" tabIndex="0"></img>
            <img id="close" src="https://png.icons8.com/cancel/ios7/73/ffffff" height="40px"></img>
            <div id="page-content-wrapper">
                <Intro />
                <Education />
                <Languages />
                <Employment />
                <AdditionalSkills />
                <VolunteerWork />
                <Hobbies />
                <Footer />
            </div>
        </div>
        <Modal />
    </div>,
    document.getElementById('root')
);



$(document).ready(function(){    
    $("#down-arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top
        }, 2000);
    });
    
    
    var borderRadius = "40px 20px 40px 20px";
    var controller = new ScrollMagic.Controller();
    
    /*----- navbar pin, push-up, & li animations -----*/    
    var navTween = TweenMax.staggerFrom(".navbar li", 0.7, { ease:  Power0.easeNone, x:20, opacity: 0, rotationY: 90, transformOrigin: "left top" }, 0.3);
    
    var navItemsAppearScene = new ScrollMagic.Scene({
        triggerElement: '.Education-1',
        triggerHook: 0.95,
        offset: 0,
        reverse: false
    })
    .setTween(navTween)
    .addTo(controller);
    /*
    var pinTopNavTween1 = TweenMax.to(".navbar", 0.05, {
        dataSpy: 'affix',
        autoRound: false
    });
    
    var pinTopNavScene = new ScrollMagic.Scene({
        triggerElement: '.navbar',
        triggerHook: 0
    })
    .setTween(pinTopNavTween1)
    .addTo(controller);*/
    
    var changeTopNavColorScene = new ScrollMagic.Scene({
        triggerElement: '.navbar',
        autoRound: false,
        triggerHook: 0
    })
    .setClassToggle('.navbar', 'black-nav')
    .addTo(controller);
    /*
    var pushNavUpTween1 = TweenMax.from(".navbar", 0.05, {
        y: "-=50px",
        autoRound: false
    });
    
    var pushNavUpScene1 = new ScrollMagic.Scene({
        triggerElement: '.Education',
        triggerHook: 0.95
    })
    .setTween(pushNavUpTween1)
    .addTo(controller);*/
    
    var pushNavUpTween2 = TweenMax.to(".navbar", 0.05, {
        y: "-=50px",
        autoRound: false
    });
    
    var pushNavUpScene2 = new ScrollMagic.Scene({
        triggerElement: '.Hobbies-1',
        triggerHook: 0.07
    })
    .setTween(pushNavUpTween2)
    .addTo(controller);
    
    var pushMenuUpTween = TweenMax.to("#menu", 0.01, {
        y: "-=9px",
        autoRound: false
    });
    
    var pushMenuUpScene = new ScrollMagic.Scene({
        triggerElement: '.navbar',
        triggerHook: 0.04
    })
    .setTween(pushMenuUpTween)
    .addTo(controller);
    
    /*----- Header fade-in animations -----*/
    $('.scrollmagic-fade-in').each(function(){
        var headerScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.85,
            reverse: false
        })
        .setClassToggle(this, 'fade-in')
        /*
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    })
    
    /*----- Circle animations -----*/
    $('.scrollmagic-circle').each(function(){
        var headerScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.85,
            reverse: false
        })
        .setClassToggle(this, 'fade-in')
        /*
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            colorStart: '#75C695'
        })*/
        .addTo(controller);
    })
    
    
    
    /*----- Border radius scenes -----*/
    var nameBorderTween = TweenMax.to("#name", 1, { 
        borderRadius:"80px 40px 80px 40px",
        ease:Power1.easeIn
    });

	var nameBorderscene = new ScrollMagic.Scene({
        triggerElement: "#name",
        triggerHook: 0.25,
        reverse: true
    })
    .setTween(nameBorderTween)
    .addTo(controller);
    
    var aboutMeBorderTween = TweenMax.to("#about-me", 1, { 
        borderRadius: borderRadius,
        ease:Power1.easeIn
    });

	var aboutMeBorderscene = new ScrollMagic.Scene({
        triggerElement: "#about-me",
        triggerHook: 0.25,
        reverse: true
    })
    .setTween(aboutMeBorderTween)
    .addTo(controller);
    
    var educationBorderTween = TweenMax.to("#education", 1, { 
        borderRadius: borderRadius,
        ease:Power1.easeIn
    });

	var educationBorderscene = new ScrollMagic.Scene({
        triggerElement: "#education",
        triggerHook: 0.25,
        reverse: true
    })
    .setTween(educationBorderTween)
    .addTo(controller);
    
    var projectBorderTween = TweenMax.to("#senior-project", 1, { 
        borderRadius: borderRadius,
        ease:Power1.easeIn
    });

	var projectBorderscene = new ScrollMagic.Scene({
        triggerElement: "#senior-project",
        triggerHook: 0.25,
        reverse: true
    })
    .setTween(projectBorderTween)
    .addTo(controller);
    
    var onlineBorderTween = TweenMax.to("#online-courses", 1, { 
        borderRadius: borderRadius,
        ease:Power1.easeIn
    });

	var onlineBorderscene = new ScrollMagic.Scene({
        triggerElement: "#online-courses",
        triggerHook: 0.25,
        reverse: true
    })
    .setTween(onlineBorderTween)
    .addTo(controller);
    
    var languagesBorderTween = TweenMax.to("#languages", 1, { 
        borderRadius: borderRadius,
        ease:Power1.easeIn
    });

	var languagesBorderscene = new ScrollMagic.Scene({
        triggerElement: "#languages",
        triggerHook: 0.25,
        reverse: true
    })
    .setTween(languagesBorderTween)
    .addTo(controller);
    
    var employmentBorderTween = TweenMax.to("#employment", 1, { 
        borderRadius: borderRadius,
        ease:Power1.easeIn
    });

	var employmentBorderscene = new ScrollMagic.Scene({
        triggerElement: "#employment",
        triggerHook: 0.25,
        reverse: true
    })
    .setTween(employmentBorderTween)
    .addTo(controller);
    
    var additionalSkillsBorderTween = TweenMax.to("#additional-skills", 1, { 
        borderRadius: borderRadius,
        ease:Power1.easeIn
    });

	var additionalSkillsBorderscene = new ScrollMagic.Scene({
        triggerElement: "#additional-skills",
        triggerHook: 0.25,
        reverse: true
    })
    .setTween(additionalSkillsBorderTween)
    .addTo(controller);
    
    var volunteerWorkBorderTween = TweenMax.to("#volunteer-work", 1, { 
        borderRadius:"40px 20px 40px 20px",
        ease:Power1.easeIn
    });

	var volunteerWorkBorderscene = new ScrollMagic.Scene({
        triggerElement: "#volunteer-work",
        triggerHook: 0.25,
        reverse: true
    })
    .setTween(volunteerWorkBorderTween)
    .addTo(controller);
    
    var hobbiesBorderTween = TweenMax.to("#hobbies", 1, { 
        borderRadius: borderRadius,
        ease:Power1.easeIn
    });

	var hobbiesBorderscene = new ScrollMagic.Scene({
        triggerElement: "#hobbies",
        triggerHook: 0.25,
        reverse: true
    })
    .setTween(hobbiesBorderTween)
    .addTo(controller);
        
        
    /*----- List fade in scenes -----*/
    var courseListOddScene = new ScrollMagic.Scene({
        triggerElement: '#course-list li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#course-list li:nth-child(odd)', 'fade-in')
    .addTo(controller);
        
    var courseListEvenScene = new ScrollMagic.Scene({
        triggerElement: '#course-list li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#course-list li:nth-child(even)', 'fade-in')
    .addTo(controller);
    
    var onlineListOddScene = new ScrollMagic.Scene({
        triggerElement: '#online-list li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#online-list li:nth-child(odd)', 'fade-in')
    .addTo(controller);
        
    var onlineListEvenScene = new ScrollMagic.Scene({
        triggerElement: '#online-list li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#online-list li:nth-child(even)', 'fade-in')
    .addTo(controller);
        
    var languageListOddScene = new ScrollMagic.Scene({
        triggerElement: '#language-list li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#language-list li:nth-child(odd)', 'fade-in')
    .addTo(controller);
        
    var languageListEvenScene = new ScrollMagic.Scene({
        triggerElement: '#language-list li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#language-list li:nth-child(even)', 'fade-in')
    .addTo(controller);
        
    var skillListOddScene = new ScrollMagic.Scene({
        triggerElement: '#skill-list li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#skill-list li:nth-child(odd)', 'fade-in')
    .addTo(controller);
        
    var skillListEvenScene = new ScrollMagic.Scene({
        triggerElement: '#skill-list li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#skill-list li:nth-child(even)', 'fade-in')
    .addTo(controller);
        
    var volunteerListOddScene = new ScrollMagic.Scene({
        triggerElement: '#volunteer-list li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#volunteer-list li:nth-child(odd)', 'fade-in')
    .addTo(controller);
        
    var volunteerListEvenScene = new ScrollMagic.Scene({
        triggerElement: '#volunteer-list li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#volunteer-list li:nth-child(even)', 'fade-in')
    .addTo(controller);

    /* ----Background Scroll animations -----*/   
    var intro1ParallaxTween = TweenMax.to(".Intro-1", 1, {
        backgroundSize: "+=200px +=133.3px",
        backgroundPositionX: "-=50%",
        autoRound:false, 
        ease:Power1.ease0ut
    });

	var intro1Parallaxscene = new ScrollMagic.Scene({
        triggerElement: ".Intro-1", 
        duration: "100%",
        triggerHook:0
    })
    .setTween(intro1ParallaxTween)
    .addTo(controller);
     
    /*
    var intro1BrighterTween = TweenMax.to(".Intro-1", 0.01, {
        filter: "brightness(150%)",
        autoRound:false, 
        ease:Power0.linear
    });

    
    var intro1BrighterScene = new ScrollMagic.Scene({
        triggerElement: ".Intro-2",
        triggerHook: 0.9
    })
    .setTween(intro1BrighterTween)
    .addTo(controller);
    
    var intro1EvenBrighterTween = TweenMax.to(".Intro-1", 0.01, {
        filter: "brightness(200%)",
        autoRound:false, 
        ease:Power0.linear
    });
    
    var intro1EvenBrighterScene = new ScrollMagic.Scene({
        triggerElement: ".Intro-2",
        triggerHook: 0.7
    })
    .setTween(intro1EvenBrighterTween)
    .addTo(controller);
    
    var intro1BrightestTween = TweenMax.to(".Intro-1", 0.01, {
        filter: "brightness(300%)",
        autoRound:false, 
        ease:Power0.linear
    });

    var intro1BrightestScene = new ScrollMagic.Scene({
        triggerElement: ".Intro-2",
        triggerHook: 0.5,
        
    })
    .setTween(intro1BrightestTween)
    .addTo(controller);*/
    
    var education1ParallaxTween = TweenMax.to(".Education-1", 1, { 
        backgroundPositionX: "+=80%",
        autoRound:false, 
        ease:Power1.easeIn
    });

	var education1Parallaxscene = new ScrollMagic.Scene({
        triggerElement: ".Education-1",
        triggerHook: 1,
        duration: "200%"
    })
    .setTween(education1ParallaxTween)
    .addTo(controller);
    
    var languages2ParallaxTween = TweenMax.to(".Languages-2", 1, { 
        backgroundPositionX: "-=30%",
        autoRound:false, 
        ease:Power0.linear
    });

	var languages2Parallaxscene = new ScrollMagic.Scene({
        triggerElement: ".Languages-2",
        triggerHook: 1,
        duration: "250%"
    })
    .setTween(languages2ParallaxTween)
    .addTo(controller);
    
    var languages2InvertTween = TweenMax.to(".Languages-2", 0.01, {
        filter: "invert(300%)",
        autoRound:false, 
        ease:Power0.linear
    });

    var languages2InvertScene = new ScrollMagic.Scene({
        triggerElement: ".Languages-2",
        triggerHook: 0.25,
    })
    .setTween(languages2InvertTween)
    .addTo(controller);
    
    var employment2ParallaxTween = TweenMax.from(".Employment-2", 1, { 
        backgroundSize: "+=200px +=150px",
        autoRound:false, 
        ease:Power1.easeOut
    });

	var employment2Parallaxscene = new ScrollMagic.Scene({
        triggerElement: ".Employment-2",
        triggerHook: 1,
        duration: "200%"
    })
    .setTween(employment2ParallaxTween)
    .addTo(controller);
    
    var skills2ParallaxTween = TweenMax.to(".Skills-2", 1, { 
        backgroundSize: "+=500px +=332.25px", //changes bg image size without changing proportions
        autoRound:false, 
        ease:Power0.easeOut
    });

	var skills2Parallaxscene = new ScrollMagic.Scene({
        triggerElement: ".Skills-2",
        triggerHook: 1,
        duration: "200%"
    })
    .setTween(skills2ParallaxTween)
    .addTo(controller);
    
    var skills3ParallaxTween = TweenMax.to(".Skills-3", 1, { 
        backgroundPositionX: "-=100%",
        autoRound:false, 
        ease:Power0.easeOut
    });

	var skills3Parallaxscene = new ScrollMagic.Scene({
        triggerElement: ".Skills-3",
        triggerHook: 1,
        duration: "200%"
    })
    .setTween(skills3ParallaxTween)
    .addTo(controller);
    
    var volunteer2ParallaxTween = TweenMax.from(".Volunteer-2", 1, { 
        backgroundSize: "+=400px +=266.8px", //changes bg image size without changing proportions
        autoRound:false, 
        ease:Power1.easeOut
    });

	var volunteer2Parallaxscene = new ScrollMagic.Scene({
        triggerElement: ".Volunteer-2",
        triggerHook: 1,
        duration: "200%"
    })
    .setTween(volunteer2ParallaxTween)
    .addTo(controller);
    
    var volunteer2BlurredParallaxTween = TweenMax.from(".Volunteer-2-blurred", 1, { 
        backgroundSize: "+=400px +=266.8px", //changes bg image size without changing proportions
        autoRound:false, 
        ease:Power1.easeOut
    });

	var volunteer2BlurredParallaxscene = new ScrollMagic.Scene({
        triggerElement: ".Volunteer-2-blurred",
        triggerHook: 1,
        duration: "200%"
    })
    .setTween(volunteer2BlurredParallaxTween)
    .addTo(controller);
    
    var volunteer2DisappearParallaxTween = TweenMax.to(".Volunteer-2-blurred", 1, { 
        opacity: "1",
        autoRound:false, 
        ease:Power1.easeOut
    });

	var volunteer2DisappearParallaxscene = new ScrollMagic.Scene({
        triggerElement: ".Volunteer-2-blurred",
        triggerHook: 0.2,
        duration: "50%"
    })
    .setTween(volunteer2DisappearParallaxTween)
    .addTo(controller);
    
    var hobbies2ParallaxTween = TweenMax.from(".Hobbies-2", 1, { 
        backgroundSize: "+=300px +=199.65px", //changes bg image size without changing proportions
        autoRound:false, 
        ease:Power1.easeIn
    });

	var hobbies2DisappearParallaxscene = new ScrollMagic.Scene({
        triggerElement: ".Hobbies-2",
        triggerHook: 1,
        duration: "150%"
    })
    .setTween(hobbies2ParallaxTween)
    .addTo(controller);
    
    /*----- Hobbies Tween -----*/
    
    var hobbiesTween = TweenMax.staggerFrom("#hobby-icons img", 0.2, { ease:  Power0.easeNone, x:20, opacity: 0, rotationY: 90, transformOrigin: "left top" }, 0.15);
    
    var hobbiesScene = new ScrollMagic.Scene({
        triggerElement: '#hobby-icons',
        triggerHook: 0.95,
        offset: 0,
        reverse: false
    })
    .setTween(hobbiesTween)
    .addTo(controller);
    

    /*----- Navbar highlight animations -----*/ 
    var heightFromTopToLanguages = $('.Languages-1').offset().top;
    var heightOfEducation = $('.Languages-1').offset().top - $('.Education-1').offset().top;
    var heightOfLanguages = $('.Employment-1').offset().top - $('.Languages-1').offset().top;
    var heightOfEmployment = $('.Skills-1').offset().top - $('.Employment-1').offset().top;
    var heightOfSkills = $('.Volunteer-1').offset().top - $('.Skills-1').offset().top;
    var heightOfVolunteer = $('.Hobbies-1').offset().top - $('.Volunteer-1').offset().top;
    var heightOfHobbies = $('.Hobbies-2').offset().top - $('.Hobbies-1').offset().top;
    
    
    var nav1Tween = new ScrollMagic.Scene({
        triggerElement: ".Education-1",
        triggerHook: 0.5000000000001,
        duration: heightOfEducation
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(1)", "active") // add class toggle
    .addTo(controller);
    
	var nav2Tween = new ScrollMagic.Scene({
        triggerElement: ".Languages-1",
        triggerHook: 0.5000000000001,
        duration: heightOfLanguages
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(2)", "active") // add class toggle
    .addTo(controller);
    
	var nav3Tween = new ScrollMagic.Scene({
        triggerElement: ".Employment-1",
        triggerHook: 0.5000000000001,
        duration: heightOfEmployment
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(3)", "active") // add class toggle
    .addTo(controller);
    
	var nav4Tween = new ScrollMagic.Scene({
        triggerElement: ".Skills-1",
        triggerHook: 0.5000000000001,
        duration: heightOfSkills
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(4)", "active") // add class toggle
    .addTo(controller);
    
    var nav5Tween = new ScrollMagic.Scene({
        triggerElement: ".Volunteer-1",
        triggerHook: 0.5000000000001,
        duration: heightOfVolunteer
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(5)", "active") // add class toggle
    .addTo(controller);
    
    var nav6Tween = new ScrollMagic.Scene({
        triggerElement: ".Hobbies-1",
        triggerHook: 0.5000000000001,
        duration: heightOfHobbies
    })
    .setClassToggle(".navbar-default .navbar-nav > li:nth-child(6)", "active") // add class toggle
    .addTo(controller);
    
    var navIconShowTween = new ScrollMagic.Scene({
        triggerElement: ".Education-1",
        triggerHook: 0.5000000000001,
        duration: "100000%"
    })
    
    .setClassToggle("#nav-icon", "fade-in") // add class toggle
    .addTo(controller);
    
    var navIcon1Tween = new ScrollMagic.Scene({
        triggerElement: ".Intro-1",
        triggerHook: 0,
        duration: heightFromTopToLanguages
    })
    .setClassToggle("#nav-icon", "nav-icon-education") // add class toggle
    .addTo(controller);
    
	var navIcon2Tween = new ScrollMagic.Scene({
        triggerElement: ".Languages-1",
        triggerHook: 0.5000000000001,
        duration: heightOfLanguages
    })
    .setClassToggle("#nav-icon", "nav-icon-languages") // add class toggle
    .addTo(controller);
    
    var navIcon3Tween = new ScrollMagic.Scene({
        triggerElement: ".Employment-1",
        triggerHook: 0.5000000000001,
        duration: heightOfEmployment
    })
    .setClassToggle("#nav-icon", "nav-icon-employment") // add class toggle
    .addTo(controller);
    
	var navIcon4Tween = new ScrollMagic.Scene({
        triggerElement: ".Skills-1",
        triggerHook: 0.5000000000001,
        duration: heightOfSkills
    })
    .setClassToggle("#nav-icon", "nav-icon-skills") // add class toggle
    .addTo(controller);
    
	var navIcon5Tween = new ScrollMagic.Scene({
        triggerElement: ".Volunteer-1",
        triggerHook: 0.5000000000001,
        duration: heightOfVolunteer
    })
    .setClassToggle("#nav-icon", "nav-icon-volunteer-work") // add class toggle
    .addTo(controller);
    
    var navIcon6Tween = new ScrollMagic.Scene({
        triggerElement: ".Hobbies-1",
        triggerHook: 0.5000000000001,
        duration: heightOfHobbies
    })
    .setClassToggle("#nav-icon", "nav-icon-hobbies") // add class toggle
    .addTo(controller);

    /*----- Video animations -----*/
    /*
    var introVideoInvertTween = TweenMax.to("#intro-window", 0.01, {
        filter: "invert(100%)",
        autoRound:false, 
        ease:Power0.linear
    });

    var introVideoInvertScene = new ScrollMagic.Scene({
        triggerElement: "#about-me",
        triggerHook: 0.5,
        reverse: true
    })
    .setTween(introVideoInvertTween)
    .addTo(controller);
    
    var volunteerVideoInvertTween = TweenMax.to("#volunteer-window", 0.01, {
        filter: "invert(100%) grayscale(100%)",
        autoRound:false, 
        ease:Power0.linear
    });

    var volunteerVideoInvertScene = new ScrollMagic.Scene({
        triggerElement: "#volunteer-work",
        triggerHook: 0.5,
        reverse: true
    })
    .setTween(volunteerVideoInvertTween)
    .addTo(controller);*/
    
    
    /*
    function rotate(event) 
    {
        var x = event.clientX;
        var wwidth = window.innerWidth;
        var horizmidpoint = wwidth / 2;
        var xpos = x - horizmidpoint;
        var xval = (xpos / horizmidpoint) * 2;
        
        var y = event.clientY;
        var wheight = window.innerHeight;
        var vertmidpoint = wheight / 2;
        var ypos = y - vertmidpoint;
        var yval = (ypos / vertmidpoint) * 2;
        
        var tilt0 = document.getElementById("window-1");
        console.log(ypos);
        
        tilt0.style.transform = "translateX(" + (-xval) + "vw)";
    }

    document.addEventListener("mousemove", function (event)
    {
        rotate(event)
    }, false);
    */

     /*================Remove down arrow when in Landscape layout on mobile devices================*/
     var sm = window.matchMedia( "(max-width: 991px)" );
     if(sm.matches && (window.outerWidth > window.outerHeight)){
          $("#dArrow1").remove();
     }
     /*================Sidebar toggle & page-content-wrapper enable/disable================*/
     var menuRotate = 0;

     $('#page-content-wrapper, #close').click(function(){
          $('#wrapper').removeClass('menuDisplayed');
          $('#page-content-wrapper *').removeClass('disabled');
          $('#close').css({
               'opacity' : "0",
               'transform' : 'translateX(0px)',
               'transform' : 'rotateY(90deg)'
          });
     });

     $('#menu').click(function(){
          $('#wrapper').addClass('menuDisplayed');
          $('#page-content-wrapper *').addClass('disabled');
          $('#close').css({
               'transform' : 'translateX(30px)',
               'opacity' : '1'
          });
    });

    /*================Pre-load Hobby Images================*/
    var images = new Array()
			function preload() {
				for (var i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}
			preload(
				"images/tennis.jpg",
				"images/gaming.jpg",
				"images/trance.jpg",
                "images/travel.jpg",
                "images/foreignlanguages.jpg",
                "images/weight-lifting.jpg",
                "images/running.jpg",
                "images/cars.jpg",
                "images/pingpong.jpg",
                "images/history.jpg",
                "images/health.jpg",
                "images/pets.jpg"
			)
            
            
            
     if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
        $('body').on("mousewheel", function () {
            event.preventDefault();
            var wd = event.wheelDelta;
            var csp = window.pageYOffset;
            window.scrollTo(0, csp - wd);
        });
    }       
            

})

$(window).scroll(function(){
     var wScroll = $(this).scrollTop();
     var sm = window.matchMedia( "(max-width: 991px)" );
     var md = window.matchMedia( "(min-width: 992px)" );
    
    
    $('.navbar').data('spy','affix-top');

})

/*
Firefox super responsive scroll (c) Keith Clark - MIT Licensed
*/
(function(doc) {

  var root = doc.documentElement,
      scrollbarWidth, scrollEvent;

  // Not ideal, but better than UA sniffing.
  if ("MozAppearance" in root.style) {

    // determine the vertical scrollbar width
    scrollbarWidth = root.clientWidth;
    root.style.overflow = "scroll";
    scrollbarWidth -= root.clientWidth;
    root.style.overflow = "";

    // create a synthetic scroll event
    scrollEvent = doc.createEvent("UIEvent")
    scrollEvent.initEvent("scroll", true, true);

    // event dispatcher
    function scrollHandler() {
      doc.dispatchEvent(scrollEvent)
    }

    // detect mouse events in the document scrollbar track
    doc.addEventListener("mousedown", function(e) {
      if (e.clientX > root.clientWidth - scrollbarWidth) {
        doc.addEventListener("mousemove", scrollHandler, false);
        doc.addEventListener("mouseup", function() {
          doc.removeEventListener("mouseup", arguments.callee, false);
          doc.removeEventListener("mousemove", scrollHandler, false);
        }, false)
      }
    }, false)

    // override mouse wheel behaviour.
    doc.addEventListener("DOMMouseScroll", function(e) {
      // Don't disable hot key behaviours
      if (!e.ctrlKey && !e.shiftKey) {
        root.scrollTop += e.detail * 16;
        scrollHandler.call(this, e);
        e.preventDefault()
      }
    }, false)

  }
})(document);
