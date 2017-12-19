import {TweenMax, Power2, TimelineLite} from "gsap";
import scrollTo from '../node_modules/gsap/ScrollToPlugin';
import ScrollMagic from 'scrollmagic';

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
import $ from "jquery";



import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';


ReactDOM.render(
    <div className="App">
        <div id="wrapper">
            <div id="sidebar-wrapper">
                <Sidebar />
            </div>
            <img id="menu" src="https://png.icons8.com/xbox-menu/ios7/73/ffffff" tabIndex="0"></img>
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
    </div>,
    document.getElementById('root')
);



$(document).ready(function(){  
    /*----- Navbar highlight animations -----*/ 
    var heightOfEducation = $('.Languages-1').offset().top - $('.Education-1').offset().top;
    var heightOfLanguages = $('.Employment-1').offset().top - $('.Languages-1').offset().top;
    var heightOfEmployment = $('.Skills-1').offset().top - $('.Employment-1').offset().top;
    var heightOfSkills = $('.Volunteer-1').offset().top - $('.Skills-1').offset().top;
    var heightOfVolunteer = $('.Hobbies-1').offset().top - $('.Volunteer-1').offset().top;
    var heightOfHobbies = $('.Hobbies-4').offset().top - $('.Hobbies-1').offset().top;
    
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
    
    
    $("#down-arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#down-arrow-dest").offset().top
        }, 2000);
    });
    
    var controller = new ScrollMagic.Controller();
    
    //only perform navbar tweens on laptops & desktops
    if(laptopsAndDesktops.matches){
        
        /*----- navbar pin, push-up, & li animations -----*/    
        var navTween = TweenMax.staggerFrom(".navbar li", 0.7, { ease:  Power0.easeNone, x:20, opacity: 0, rotationY: 90, transformOrigin: "left top" }, 0.3);

        //if not Firefox....
        if (!(/Firefox/i.test(navigator.userAgent))){
            var navItemsAppearScene = new ScrollMagic.Scene({
                triggerElement: '.Education-1',
                triggerHook: 0.95,
                offset: 0,
                reverse: false
            })
            .setTween(navTween)
            .addTo(controller);
        }

        var pinTopNavScene = new ScrollMagic.Scene({
            triggerElement: '.Education-1',
            autoRound: false,
            triggerHook: navBrowserHeight 
        })
        .setPin('.navbar')
        .addTo(controller);

        var changeTopNavColorScene = new ScrollMagic.Scene({
            triggerElement: '.Education-1',
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
            triggerElement: '.Hobbies-2',
            triggerHook: 0.07
        })
        .setTween(pushNavUpTween)
        .addTo(controller);

        var navEducationTween = new ScrollMagic.Scene({
            triggerElement: ".Education-1",
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
            triggerElement: ".Languages-1",
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
            triggerElement: ".Employment-1",
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
            triggerElement: ".Skills-1",
            triggerHook: 0.50003,
            duration: heightOfSkills
        })
        .setClassToggle(".navbar-default .navbar-nav > li:nth-child(4)", "active") // add class toggle
        .addTo(controller);

        var navVolunteerWorkTween = new ScrollMagic.Scene({
            triggerElement: ".Volunteer-1",
            triggerHook: 0.50004,
            duration: heightOfVolunteer
        })
        .setClassToggle(".navbar-default .navbar-nav > li:nth-child(5)", "active") // add class toggle
        .addTo(controller);

        var navHobbiesween = new ScrollMagic.Scene({
            triggerElement: ".Hobbies-1",
            triggerHook: 0.50005,
            duration: heightOfHobbies
        })
        .setClassToggle(".navbar-default .navbar-nav > li:nth-child(6)", "active") // add class toggle
        .addTo(controller);

        var navIconShowTween = new ScrollMagic.Scene({
            triggerElement: ".Education-1",
            triggerHook: 0.5000,
            duration: heightOfEducation
        })
        .setClassToggle("#nav-icon-education", "fade-in") // add class toggle
        .addTo(controller);

        var navIconLanguagesTween = new ScrollMagic.Scene({
            triggerElement: ".Languages-1",
            triggerHook: 0.50001,
            duration: heightOfLanguages
        })
        .setClassToggle("#nav-icon-languages", "fade-in") // add class toggle
        .addTo(controller);

        var navIconEmploymentTween = new ScrollMagic.Scene({
            triggerElement: ".Employment-1",
            triggerHook: 0.50002,
            duration: heightOfEmployment
        })
        .setClassToggle("#nav-icon-employment", "fade-in") // add class toggle
        .addTo(controller);

        var navIconSkillsTween = new ScrollMagic.Scene({
            triggerElement: ".Skills-1",
            triggerHook: 0.50003,
            duration: heightOfSkills
        })
        .setClassToggle("#nav-icon-additional-skills", "fade-in") // add class toggle
        .addTo(controller);

        var navIconVolunteerTween = new ScrollMagic.Scene({
            triggerElement: ".Volunteer-1",
            triggerHook: 0.50004,
            duration: heightOfVolunteer
        })
        .setClassToggle("#nav-icon-volunteer-work", "fade-in") // add class toggle
        .addTo(controller);

        var navIconHobbiesTween = new ScrollMagic.Scene({
            triggerElement: ".Hobbies-1",
            triggerHook: 0.50005,
            duration: heightOfHobbies
        })
        .setClassToggle("#nav-icon-hobbies", "fade-in") // add class toggle
        .addTo(controller);

    }
    
    /* ----Background Scroll animations -----*/
    
    //only perform these background tweens on laptops & desktops
    if(laptopsAndDesktops.matches){ 
        var intro1Tween = TweenMax.to(".Intro-1", 1, {
            backgroundSize: "+=300px +=199.9999998px",
            backgroundPositionX: "-=10%",
            autoRound:false, 
            ease:Power1.ease0ut
        });

        var intro1Scene = new ScrollMagic.Scene({
            triggerElement: ".Intro-1", 
            duration: "100%",
            triggerHook:0
        })
        .setTween(intro1Tween)
        .addTo(controller);
        
        var education1Tween = TweenMax.to(".Education-1", 1, { 
            backgroundPositionX: "+=80%",
            autoRound:false, 
            ease:Power1.easeIn
        });

        var education1Scene = new ScrollMagic.Scene({
            triggerElement: ".Education-1",
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(education1Tween)
        .addTo(controller);
        
        var languages2Tween = TweenMax.to(".Languages-2", 1, { 
            backgroundPositionX: "-=30%",
            autoRound:false, 
            ease:Power0.linear
        });

        var languages2Scene = new ScrollMagic.Scene({
            triggerElement: ".Languages-2",
            triggerHook: 1,
            duration: "250%"
        })
        .setTween(languages2Tween)
        .addTo(controller);
        
        if (!(/Firefox/i.test(navigator.userAgent))){
            var employment2Tween = TweenMax.from(".Employment-2", 1, { 
                backgroundPositionY: "-=50px",
                autoRound:false, 
                ease:Power1.easeOut
            });

            var employment2Scene = new ScrollMagic.Scene({
                triggerElement: ".Employment-2",
                triggerHook: 1,
                duration: "200%"
            })
            .setTween(employment2Tween)
            .addTo(controller);
        }

        var skills2Tween = TweenMax.to(".Skills-2", 1, { 
            backgroundSize: "+=300px +=199.35px", //changes bg image size without changing proportions
            autoRound:false, 
            ease:Power0.easeOut
        });

        var skills2Scene = new ScrollMagic.Scene({
            triggerElement: ".Skills-2",
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(skills2Tween)
        .addTo(controller);

        var skills3Tween = TweenMax.to(".Skills-3", 1, { 
            backgroundPositionX: "-=100%",
            autoRound:false, 
            ease:Power0.easeOut
        });

        var skills3Scene = new ScrollMagic.Scene({
            triggerElement: ".Skills-3",
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(skills3Tween)
        .addTo(controller);
        
        var volunteer2Tween = TweenMax.from(".Volunteer-2", 1, { 
            backgroundSize: "+=400px +=266.8px", //changes bg image size without changing proportions
            autoRound:false, 
            ease:Power1.easeOut
        });

        var volunteer2Scene = new ScrollMagic.Scene({
            triggerElement: ".Volunteer-2",
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(volunteer2Tween)
        .addTo(controller);

        var volunteer2BlurredTween = TweenMax.from(".Volunteer-2-blurred", 1, { 
            backgroundSize: "+=400px +=266.8px", //changes bg image size without changing proportions
            autoRound:false, 
            ease:Power1.easeOut
        });

        var volunteer2BlurredScene = new ScrollMagic.Scene({
            triggerElement: ".Volunteer-2-blurred",
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(volunteer2BlurredTween)
        .addTo(controller);

        var volunteer2DisappearTween = TweenMax.to(".Volunteer-2-blurred", 1, { 
            opacity: "1",
            autoRound:false, 
            ease:Power1.easeOut
        });

        var volunteer2DisappearScene = new ScrollMagic.Scene({
            triggerElement: ".Volunteer-2-blurred",
            triggerHook: 0.3,
            duration: "50%"
        })
        .setTween(volunteer2DisappearTween)
        .addTo(controller);
        
        var volunteer3Tween = TweenMax.to(".Volunteer-3", 1, { 
            backgroundPositionX: "+=20%",
            autoRound:false, 
            ease:Power0.linear
        });

        var volunteer3Scene = new ScrollMagic.Scene({
            triggerElement: ".Volunteer-3",
            triggerHook: 1,
            duration: "250%"
        })
        .setTween(volunteer3Tween)
        .addTo(controller);
        
        var hobbies2Tween = TweenMax.from(".Hobbies-2", 1, { 
            backgroundPositionY: "-=100px",
            autoRound:false, 
            ease:Power1.easeOut
        });

        var hobbies2Scene = new ScrollMagic.Scene({
            triggerElement: ".Hobbies-2",
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(hobbies2Tween)
        .addTo(controller);   
        
        var hobbies3Tween = TweenMax.from(".Hobbies-3", 1, { 
            backgroundPositionX: "-=30%",
            autoRound:false, 
            ease:Power1.easeOut
        });

        var hobbies3Scene = new ScrollMagic.Scene({
            triggerElement: ".Hobbies-3",
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(hobbies3Tween)
        .addTo(controller);     
        
        var hobbies4Tween = TweenMax.from(".Hobbies-4", 1, { 
            backgroundSize: "+=200px +=133.6px",
            autoRound:false, 
            ease:Power1.easeOut
        });

        var hobbies4Scene = new ScrollMagic.Scene({
            triggerElement: ".Hobbies-4",
            triggerHook: 1,
            duration: "200%"
        })
        .setTween(hobbies4Tween)
        .addTo(controller); 
    }
     
    
    //Do for all browsers except Firefox
    if (!(/Firefox/i.test(navigator.userAgent))){
        var intro1BrighterTween = TweenMax.to(".Intro-1", 0.01, {
            filter: "brightness(133%)",
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
            filter: "brightness(167%)",
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
            filter: "brightness(200%)",
            autoRound:false, 
            ease:Power0.linear
        });
        
        var intro1BrightestScene = new ScrollMagic.Scene({
            triggerElement: ".Intro-2",
            triggerHook: 0.4,
        })
        .setTween(intro1BrightestTween)
        .addTo(controller);
        
        var languages2InvertTween = TweenMax.to(".Languages-2", 0.01, {
            filter: "invert(100%)",
            autoRound:false, 
            ease:Power0.linear
        });

        var languages2InvertScene = new ScrollMagic.Scene({
            triggerElement: ".Languages-2",
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

     $('#page-content-wrapper, #close').click(function(){
          $('#wrapper').removeClass('menuDisplayed');
          $('#page-content-wrapper *').removeClass('disabled');
          $('#close').css({
               'opacity' : "0",
               'transform' : 'translateX(0px)',
               'transform' : 'rotateY(90deg)'
          });
         $('#menu').css({
             'transform' : 'rotateY(0deg)'
         })
     });

     $('#menu').click(function(){
          $('#wrapper').addClass('menuDisplayed');
          $('#page-content-wrapper *').addClass('disabled');
          $('#close').css({
               'transform' : 'translateX(30px)',
               'opacity' : '1'
          });
         $('#menu').css({
             'transform' : 'rotateY(90deg)'
         })
    });
})


