import {TweenMax, Power2, TimelineLite} from "gsap";
import scrollTo from '../node_modules/gsap/ScrollToPlugin';
import ScrollMagic from 'scrollmagic';

const css = require('./app.scss');
require('./images/favicon.ico');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './components/wrapper/Wrapper';
import $ from "jquery";

import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';

ReactDOM.render(
    <div className="App">
        <Wrapper />
    </div>,
    document.getElementById('root')
);



$(document).ready(function(){  
    // Microsoft Edge doesn't like circular videos..
    // If Microsoft Edge, remove all video divs
    if (/Edge\/\d./i.test(navigator.userAgent)){
        $('#intro-video,  #employment-video, #volunteer-video').remove();
    }
    
    
    /*----- GSAP animations -----*/
    var downArrow = $('#down-arrow');
    var blinkingText = $('#name-R, #name-k, #about-me-o, #about-me-e, #education-E, #education-t, #senior-project-e, #senior-project-t, #online-courses-n, #online-courses-u, #languages-e, #languages-r, #employment-E, #employment-n, #additional-skills-d, #additional-skills-S, #volunteer-work-u, #volunteer-work-W, #hobbies-b, #hobbies-s, #fin-F');
    var darkeningText = $('#name-m, #about-me-u, #education-d, #senior-project-j, #online-courses-e, #languages-g, #employment-y, #additional-skills-t, #additional-skills-l, #volunteer-work-k, #hobbies-t, #fin-i');
    
    
    var downArrowTimeline = new TimelineMax({delay:0.5, repeat:-1, repeatDelay:0.5});
    
    downArrowTimeline.to(downArrow, 0.5, {y: '15px', ease: Power2.easeIn})
    downArrowTimeline.to(downArrow, 0.5, {y: '0px', ease: Power2.easeOut})
    downArrowTimeline.to(downArrow, 0.5, {y: '15px', ease: Power2.easeIn})
    downArrowTimeline.to(downArrow, 0.5, {y: '0px', ease: Power2.easeOut})
    
    var blinkingTextTimeline = new TimelineMax({repeat: -1});
    
    blinkingTextTimeline.to(blinkingText, 0.1, {opacity: '0', ease: Power4.easeOut, delay: 7})
    blinkingTextTimeline.to(blinkingText, 0.8, {opacity: '1', ease: SteppedEase.config(2)})
    
    var darkeningTextTimeline = new TimelineMax({repeat: -1});
    
    darkeningTextTimeline.from(darkeningText, 5, {webkitFilter: 'invert(0%)', filter: 'invert(0%)', ease: Power0.noEase})    
    darkeningTextTimeline.to(darkeningText, 0.1, {webkitFilter: 'invert(100%)', filter: 'invert(100%)', ease: Power2.easeIn})
    darkeningTextTimeline.to(darkeningText, 9, {webkitFilter: 'invert(0%)', filter: 'invert(0%)', ease: Power2.easeOut})
        
    /*----- Navbar highlight animations -----*/ 
    var heightOfEducation = $('.languages-1-div').offset().top - $('.education-1-div').offset().top;
    var heightOfLanguages = $('.employment-1-div').offset().top - $('.languages-1-div').offset().top;
    var heightOfEmployment = $('.skills-1-div').offset().top - $('.employment-1-div').offset().top;
    var heightOfSkills = $('.volunteer-1-div').offset().top - $('.skills-1-div').offset().top;
    var heightOfVolunteer = $('.hobbies-1-div').offset().top - $('.volunteer-1-div').offset().top;
    var heightOfHobbies = $('.hobbies-4-div').offset().top - $('.hobbies-1-div').offset().top;
    
    var laptopsAndDesktops = window.matchMedia( "(min-width: 1420px)" );
    var phonePortrait = window.matchMedia( "(max-width: 599px)" );
    var borderRadius = "30px 15px 30px 15px";
    var menu = document.getElementById("menu");
    var close = document.getElementById("close");
    var downArrow = document.getElementById("down-arrow");
    var navBrowserHeight = 50/$(window).height();
    
    //change button size based on screen
    if(laptopsAndDesktops.matches){
        menu.height = "40";
        close.height = "40";
        downArrow.height = "60";
    }else{
        menu.height = "50";
        close.height = "50";
        downArrow.height = "60"; 
    }
    
    if(phonePortrait.matches){
        $('#project-video').remove();
    }
    
    var controller = new ScrollMagic.Controller();
    
    //only perform navbar tweens on laptops & desktops
    if(laptopsAndDesktops.matches){
        
        /*----- navbar pin, push-up, & li animations -----*/    
        var navTween = TweenMax.staggerFrom(".navbar li", 0.7, { ease:  Power0.easeNone, x:20, opacity: 0, rotationY: 90, transformOrigin: "left top" }, 0.3);

        //if not Firefox....
        if (!(/Firefox/i.test(navigator.userAgent))){
            var navItemsAppearScene = new ScrollMagic.Scene({
                triggerElement: '.education-1-div',
                triggerHook: 0.95,
                offset: 0,
                reverse: false
            })
            .setTween(navTween)
            .addTo(controller);
        }

        var pinTopNavScene = new ScrollMagic.Scene({
            triggerElement: '.education-1-div',
            autoRound: false,
            triggerHook: navBrowserHeight 
        })
        .setPin('.navbar')
        .addTo(controller);

        var changeTopNavColorScene = new ScrollMagic.Scene({
            triggerElement: '.education-1-div',
            autoRound: false,
            triggerHook: navBrowserHeight 
        })
        .setClassToggle('.navbar', 'black-nav')
        .addTo(controller);

        var pushNavUpTween = TweenMax.to(".navbar", 0.05, {
            y: "-=50px",
            autoRound: false
        });

        var pushNavUpScene = new ScrollMagic.Scene({
            triggerElement: '.hobbies-2-div',
            triggerHook: 0.07
        })
        .setTween(pushNavUpTween)
        .addTo(controller);

        var navEducationTween = new ScrollMagic.Scene({
            triggerElement: ".education-1-div",
            triggerHook: 0.5000,
            duration: heightOfEducation
        })
        .setClassToggle(".navbar-default .navbar-nav > li:nth-child(1)", "active") // add class toggle
        /*
        .addIndicators({
            name: 'Education',
            colorTrigger: 'pink',
            colorStart: '#75C695'
        })*/
        .addTo(controller);

        var navLanguagesTween = new ScrollMagic.Scene({
            triggerElement: ".languages-1-div",
            triggerHook: 0.50001,
            duration: heightOfLanguages
        })
        .setClassToggle(".navbar-default .navbar-nav > li:nth-child(2)", "active") // add class toggle
        /*
        .addIndicators({
            name: 'Languages',
            colorTrigger: 'pink',
            colorStart: '#75C695'
        })*/
        .addTo(controller);

        var navEmploymentTween = new ScrollMagic.Scene({
            triggerElement: ".employment-1-div",
            triggerHook: 0.50002,
            duration: heightOfEmployment
        })
        .setClassToggle(".navbar-default .navbar-nav > li:nth-child(3)", "active") // add class toggle
        /*
        .addIndicators({
            name: 'Employment',
            colorTrigger: 'pink',
            colorStart: '#75C695'
        })*/
        .addTo(controller);

        var navAdditionalSkillsTween = new ScrollMagic.Scene({
            triggerElement: ".skills-1-div",
            triggerHook: 0.50003,
            duration: heightOfSkills
        })
        .setClassToggle(".navbar-default .navbar-nav > li:nth-child(4)", "active") // add class toggle
        .addTo(controller);

        var navVolunteerWorkTween = new ScrollMagic.Scene({
            triggerElement: ".volunteer-1-div",
            triggerHook: 0.50004,
            duration: heightOfVolunteer
        })
        .setClassToggle(".navbar-default .navbar-nav > li:nth-child(5)", "active") // add class toggle
        .addTo(controller);

        var navHobbiesween = new ScrollMagic.Scene({
            triggerElement: ".hobbies-1-div",
            triggerHook: 0.50005,
            duration: heightOfHobbies
        })
        .setClassToggle(".navbar-default .navbar-nav > li:nth-child(6)", "active") // add class toggle
        .addTo(controller);

        var navIconShowTween = new ScrollMagic.Scene({
            triggerElement: ".education-1-div",
            triggerHook: 0.5000,
            duration: heightOfEducation
        })
        .setClassToggle("#nav-icon-education", "fade-in") // add class toggle
        .addTo(controller);

        var navIconLanguagesTween = new ScrollMagic.Scene({
            triggerElement: ".languages-1-div",
            triggerHook: 0.50001,
            duration: heightOfLanguages
        })
        .setClassToggle("#nav-icon-languages", "fade-in") // add class toggle
        .addTo(controller);

        var navIconEmploymentTween = new ScrollMagic.Scene({
            triggerElement: ".employment-1-div",
            triggerHook: 0.50002,
            duration: heightOfEmployment
        })
        .setClassToggle("#nav-icon-employment", "fade-in") // add class toggle
        .addTo(controller);

        var navIconSkillsTween = new ScrollMagic.Scene({
            triggerElement: ".skills-1-div",
            triggerHook: 0.50003,
            duration: heightOfSkills
        })
        .setClassToggle("#nav-icon-additional-skills", "fade-in") // add class toggle
        .addTo(controller);

        var navIconVolunteerTween = new ScrollMagic.Scene({
            triggerElement: ".volunteer-1-div",
            triggerHook: 0.50004,
            duration: heightOfVolunteer
        })
        .setClassToggle("#nav-icon-volunteer-work", "fade-in") // add class toggle
        .addTo(controller);

        var navIconHobbiesTween = new ScrollMagic.Scene({
            triggerElement: ".hobbies-1-div",
            triggerHook: 0.50005,
            duration: heightOfHobbies
        })
        .setClassToggle("#nav-icon-hobbies", "fade-in") // add class toggle
        .addTo(controller);

    }
    
    /* ----Background Scroll animations -----*/
    
    //only perform these background tweens on laptops & desktops
    if(laptopsAndDesktops.matches){ 
        var intro1Tween = TweenMax.to(".intro-1-div", 1, {
            backgroundSize: "+=300px +=199.9999998px",
            backgroundPositionX: "-=10%",
            autoRound:false, 
            ease:Power1.ease0ut
        });

        var intro1Scene = new ScrollMagic.Scene({
            triggerElement: ".intro-1-div", 
            duration: "100%",
            triggerHook:0
        })
        .setTween(intro1Tween)
        .addTo(controller);
        
        var education1Tween = TweenMax.to(".education-1-div", 1, { 
            backgroundPositionX: "+=80%",
            autoRound:false, 
            ease:Power1.easeIn
        });

        var education1Scene = new ScrollMagic.Scene({
            triggerElement: ".education-1-div",
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(education1Tween)
        .addTo(controller);
        
        var languages2Tween = TweenMax.to(".languages-2-div", 1, { 
            backgroundPositionX: "-=30%",
            autoRound:false, 
            ease:Power0.linear
        });

        var languages2Scene = new ScrollMagic.Scene({
            triggerElement: ".languages-2-div",
            triggerHook: 1,
            duration: "250%"
        })
        .setTween(languages2Tween)
        .addTo(controller);
        
        if (!(/Firefox/i.test(navigator.userAgent))){
            var employment2Tween = TweenMax.from(".employment-2-div", 1, { 
                backgroundPositionY: "-=50px",
                autoRound:false, 
                ease:Power1.easeOut
            });

            var employment2Scene = new ScrollMagic.Scene({
                triggerElement: ".employment-2-div",
                triggerHook: 1,
                duration: "200%"
            })
            .setTween(employment2Tween)
            .addTo(controller);
        }

        var skills2Tween = TweenMax.to(".skills-2-div", 1, { 
            backgroundSize: "+=300px +=199.35px", //changes bg image size without changing proportions
            autoRound:false, 
            ease:Power0.easeOut
        });

        var skills2Scene = new ScrollMagic.Scene({
            triggerElement: ".skills-2-div",
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(skills2Tween)
        .addTo(controller);

        var skills3Tween = TweenMax.to(".skills-3-div", 1, { 
            backgroundPositionX: "-=100%",
            autoRound:false, 
            ease:Power0.easeOut
        });

        var skills3Scene = new ScrollMagic.Scene({
            triggerElement: ".skills-3-div",
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(skills3Tween)
        .addTo(controller);
        
        var volunteer2Tween = TweenMax.from(".volunteer-2-div", 1, { 
            backgroundSize: "+=400px +=266.8px", //changes bg image size without changing proportions
            autoRound:false, 
            ease:Power1.easeOut
        });

        var volunteer2Scene = new ScrollMagic.Scene({
            triggerElement: ".volunteer-2-div",
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(volunteer2Tween)
        .addTo(controller);

        var volunteer2BlurredTween = TweenMax.from(".volunteer-2-blurred-div", 1, { 
            backgroundSize: "+=400px +=266.8px", //changes bg image size without changing proportions
            autoRound:false, 
            ease:Power1.easeOut
        });

        var volunteer2BlurredScene = new ScrollMagic.Scene({
            triggerElement: ".volunteer-2-blurred-div",
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(volunteer2BlurredTween)
        .addTo(controller);

        var volunteer2DisappearTween = TweenMax.to(".volunteer-2-blurred-div", 1, { 
            opacity: "1",
            autoRound:false, 
            ease:Power1.easeOut
        });

        var volunteer2DisappearScene = new ScrollMagic.Scene({
            triggerElement: ".volunteer-2-blurred-div",
            triggerHook: 0.3,
            duration: "50%"
        })
        .setTween(volunteer2DisappearTween)
        .addTo(controller);
        
        var volunteer3Tween = TweenMax.to(".volunteer-3-div", 1, { 
            backgroundPositionX: "+=20%",
            autoRound:false, 
            ease:Power0.linear
        });

        var volunteer3Scene = new ScrollMagic.Scene({
            triggerElement: ".volunteer-3-div",
            triggerHook: 1,
            duration: "250%"
        })
        .setTween(volunteer3Tween)
        .addTo(controller);
        
        var hobbies2Tween = TweenMax.from(".hobbies-2-div", 1, { 
            backgroundPositionY: "-=100px",
            autoRound:false, 
            ease:Power1.easeOut
        });

        var hobbies2Scene = new ScrollMagic.Scene({
            triggerElement: ".hobbies-2-div",
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(hobbies2Tween)
        .addTo(controller);   
        
        var hobbies3Tween = TweenMax.from(".hobbies-3-div", 1, { 
            backgroundPositionX: "-=30%",
            autoRound:false, 
            ease:Power1.easeOut
        });

        var hobbies3Scene = new ScrollMagic.Scene({
            triggerElement: ".hobbies-3-div",
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(hobbies3Tween)
        .addTo(controller);     
        
        var hobbies4Tween = TweenMax.from(".hobbies-4-div", 1, { 
            backgroundSize: "+=200px +=133.6px",
            autoRound:false, 
            ease:Power1.easeOut
        });

        var hobbies4Scene = new ScrollMagic.Scene({
            triggerElement: ".hobbies-4-div",
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(hobbies4Tween)
        .addTo(controller); 
    }
     
    
    //Do for all browsers except Firefox
    if (!(/Firefox/i.test(navigator.userAgent))){
        var intro1BrighterTween = TweenMax.to(".intro-1-div", 0.01, {
            filter: "brightness(133%)",
            autoRound:false, 
            ease:Power0.linear
        });
        
        var intro1BrighterScene = new ScrollMagic.Scene({
            triggerElement: ".intro-2-div",
            triggerHook: 0.9
        })
        .setTween(intro1BrighterTween)
        .addTo(controller);

        var intro1EvenBrighterTween = TweenMax.to(".intro-1-div", 0.01, {
            filter: "brightness(167%)",
            autoRound:false, 
            ease:Power0.linear
        });

        var intro1EvenBrighterScene = new ScrollMagic.Scene({
            triggerElement: ".intro-2-div",
            triggerHook: 0.7
        })
        .setTween(intro1EvenBrighterTween)
        .addTo(controller);

        var intro1BrightestTween = TweenMax.to(".intro-1-div", 0.01, {
            filter: "brightness(200%)",
            autoRound:false, 
            ease:Power0.linear
        });
        
        var intro1BrightestScene = new ScrollMagic.Scene({
            triggerElement: ".intro-2-div",
            triggerHook: 0.4,
        })
        .setTween(intro1BrightestTween)
        .addTo(controller);
        
        var languages2InvertTween = TweenMax.to(".languages-2-div", 0.01, {
            filter: "invert(100%)",
            autoRound:false, 
            ease:Power0.linear
        });

        var languages2InvertScene = new ScrollMagic.Scene({
            triggerElement: ".languages-2-div",
            triggerHook: 0.25,
        })
        .setTween(languages2InvertTween)
        .addTo(controller);
    }       
    
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
        triggerElement: '#education-list li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#education-list li:nth-child(odd)', 'fade-in')
    .addTo(controller);
        
    var courseListEvenScene = new ScrollMagic.Scene({
        triggerElement: '#education-list li:nth-child(odd)',
        triggerHook: 0.8,
        reverse: false    
    })
    .setClassToggle('#education-list li:nth-child(even)', 'fade-in')
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

    
    if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
        $('body').on("mousewheel", function () {
            event.preventDefault();
            var wd = event.wheelDelta;
            var csp = window.pageYOffset;
            window.scrollTo(0, csp - wd);
        });
    }
})


