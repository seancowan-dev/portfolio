import React from 'react';
import { observable, action, computed } from 'mobx';
import { A } from 'hookrouter';

class Helpers {
    // Methods to use inside the helpers class only
    internalHelpers = {
        checkPositionValue: (position, length) => {
            let flags = 0;
            if (position < 0) { // The current position cannot be less than 0
                flags++;
            }
            if (position > length - 1) { // The current position cannot be greater than the incoming slide length
                flags++
            }
            if (flags === 0) {
                return true;
            }
        },
    }

    //Start of observables

    // Carousels

    // Shared Functions
    @action handleSlideChange = (currentElem, nextElem, direction, animCurrent, animIn, animOut) => {
        let data = { // set animations desired here
            current: document.querySelector(currentElem.classSelector), // The element that will be going off screen
            next: document.querySelector(nextElem.classSelector), // The element that will be coming on screen
            animationCurrent: animCurrent, // The animation type from animate.css that the existing element has
            animationIn: animIn, // What animation should the new element enter with?
            animationOut: animOut // What animation should the old element exit with?
        }

        let {current, next, animationCurrent, animationIn, animationOut} = data; // make vars
        this.handleSlides(current, next, animationCurrent, animationIn, animationOut, direction); // play animation
        this.toggleSlides(direction); // increment/decrement slides
    }
    // Page Slides
    @observable slideControl = { // Keeps track of page slides
        slides: [
            {
                classSelector: ".about",
                visible: true
            },
            {
                classSelector: ".about-more",
                visible: false
            },
            {
                classSelector: ".project",
                visible: false
            },
            {
                classSelector: ".contact",
                visible: false
            }
        ],
        currentPosition: 0
    };

    @computed get getCurrentPosition() { // Get current slide position
        return this.slideControl.currentPosition; 
    }
    @action findCurrentSlideInfo = () => {   // Find out the info for the currently visible slide
        let shallow = this.slideControl.slides.slice();
        return shallow[this.slideControl.currentPosition];
    }
    @action findNextSlideInfo = () => { // Find out the info for the next slide
        let shallow = this.slideControl.slides.slice();
        if (this.internalHelpers.checkPositionValue(this.slideControl.currentPosition, shallow.length) === true) {
            let shallow = this.slideControl.slides.slice();
            return shallow[this.slideControl.currentPosition + 1];
        }
    }
    @action findPrevSlideInfo = () => { // Find out the info for the next slide
        let shallow = this.slideControl.slides.slice();
        if (this.internalHelpers.checkPositionValue(this.slideControl.currentPosition, shallow.length) === true) {
            let shallow = this.slideControl.slides.slice();
            return shallow[this.slideControl.currentPosition - 1];
        }
    }
    @action findSlideInfo = (selector) => { // Find info for a particular slide
        let shallow = this.slideControl.slides.slice();
        return shallow.find(item => {
            if (item.classSelector = selector) {
                return item;
            }
        });
    }
    @action toggleSlides = (direction) => {
        if (this.internalHelpers.checkPositionValue(this.slideControl.currentPosition) === true) {
            if (direction === "forward") {
                    this.slideControl.currentPosition++;
            }
            if (direction === "backward") {
                    this.slideControl.currentPosition--;
            }
        }
    }
    @action handleSlides = (current, next, animationCurrent, animationIn, animationOut) => {
            // First prepare the old elem to enter
            next.classList.remove('animate__animated', animationOut); // Remove existing class on next (previous) - the out animation of the current elem should already be on previous elem
            next.classList.add('start'); // Return to start position
            // Next send the current elem off screen
            current.classList.remove('animate__animated', animationCurrent, 'end'); // Remove existing class
            current.classList.add('animate__animated', animationOut); // Add exit animation
            // Now try to bring the old elem back on the screen
            setTimeout(() => { // Wait for the old element to move off screen
                next.classList.remove('start');
                next.classList.add('animate__animated', animationIn, 'end'); // Add entrance animation on new element
            }, 500);  
    }

    // Project Slides
    @observable projectControl = { // Keeps track of project entries
        projects: [
            {
                titleURL: "/images/projects/findthatmovie/titlebanner.png",
                primaryText: "First version of Findthatmovie, developed to demonstrate my knowledge of RESTful APIs and jQuery.  The second version of this is developed in React/Node and both apps together illustrate my journey as a developer.",
                bulletText: "HTML 5, CSS 3, JavaScript, jQuery"
            },
            {
                titleURL: "/images/projects/findthatmovie/titlebanner.png",
                primaryText: "First version of Findthatmovie, developed to demonstrate my knowledge of RESTful APIs and jQuery.  The second version of this is developed in React/Node and both apps together illustrate my journey as a developer.",
                bulletText: "HTML 5, CSS 3, JavaScript, jQuery"
            },
            {
                titleURL: "/images/projects/findthatmovie/titlebanner.png",
                primaryText: "First version of Findthatmovie, developed to demonstrate my knowledge of RESTful APIs and jQuery.  The second version of this is developed in React/Node and both apps together illustrate my journey as a developer.",
                bulletText: "HTML 5, CSS 3, JavaScript, jQuery"
            }
        ],
        currentPosition: 0
    }

    @computed get getCurrentProjectPosition() {
        return this.projectControl.currentPosition;
    }
    @action findCurrentProjectSlideInfo = () => {
        let shallow = this.projectControl.projects.slice();
        return shallow[this.projectControl.currentPosition];
    }
    @action findNextProjectSlideInfo = () => {

    }

    // Sidebar Navigation

    @observable links = [
        [<img className="about-side-link click-pointer" src="/images/sidebar/red.png" alt="Link to about page"/>, "About Me"],
        [<img className="projects-side-link click-pointer" src="/images/sidebar/yellow.png" alt="Link to projects page"/>, "Projects"],
        [<img className="contact-side-link click-pointer" src="/images/sidebar/blue.png" alt="Link to contact page"/>, "Contact Me"],
    ]

    @action handleSidebarToggle = (target) => {
        if (target.checked === true) {
            document.querySelector('.sidebar-menu').classList.remove("animate__animated", "animate__backOutLeft", "sidebar-menu-exit");
            document.querySelector('.sidebar-menu').classList.add("animate__animated", "animate__fadeInLeft", "sidebar-menu-enter");
            document.querySelector('.sidebar-toggle').classList.remove("sidebar-toggle-exit");
            document.querySelector('.sidebar-toggle').classList.add("sidebar-toggle-enter");
        }
        if (target.checked === false) {
            document.querySelector('.sidebar-menu').classList.remove("animate__animated", "animate__fadeInLeft", "sidebar-menu-enter");
            document.querySelector('.sidebar-menu').classList.add("animate__animated", "animate__backOutLeft", "sidebar-menu-exit");
            document.querySelector('.sidebar-toggle').classList.remove("sidebar-toggle-enter");
            document.querySelector('.sidebar-toggle').classList.add("sidebar-toggle-exit");
        }
    }
    @action populateSideBar = (linkObject) => {
        return this.links.map(link => {
            return <li><div className="link-container">
                            <div className="link-container-inner">
                                <div className="link-text link-children">
                                    <p className="click-pointer">{link[1]}</p>
                                </div>
                                <div className="link-image link-children">
                                    {link[0]}
                                </div>
                            </div>
                        </div>
                    </li>
        })
    }
}

export default new Helpers();