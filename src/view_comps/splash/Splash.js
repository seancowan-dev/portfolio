import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import ProjectCard from './splash_comps/project-card';
import AboutBarker from './splash_comps/about-barker';
import AboutMore from './splash_comps/about-more';
import Contact from './splash_comps/contact';
import SidebarMenu from './splash_comps/sidebar-menu';
import Footer from './splash_comps/footer';
import '../../animate.min.css';

const Splash = inject('helpers')(observer((props) => {

    return (<div className="splash">
            <SidebarMenu />
            <div className="splash-header">
            <input 
            type="checkbox" 
            class="open-menu" 
            id="open-menu"
            onChange={(e) => {
                props.helpers.handleSidebarToggle(e.target);
            }}
            ></input>
            <label for="open-menu" class="sidebar-toggle">
                <div class="spinner diagonal part-1"></div>
                <div class="spinner horizontal"></div>
                <div class="spinner diagonal part-2"></div>
            </label>  
            <p className="main-heading">Sean Cowan</p>
                <img className="splash-image" src="/images/fullstackdevribbon.png"></img>
                <hr />
            </div>
                <div className="slides">
                    <div className="about slide end animate__animated animate__bounceInUp">
                        <AboutBarker />
                    </div>
                    <div className="about-more slide start">
                        <AboutMore />
                    </div>
                    <div className="project slide start">
                        <ProjectCard />
                    </div>
                    <div className="contact slide start">
                        <Contact />
                    </div>
                </div>
            </div>);
}));

export default Splash;