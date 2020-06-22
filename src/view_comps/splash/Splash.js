import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import ProjectCard from './splash_comps/project-card';
import AboutBarker from './splash_comps/about-barker';
import Contact from './splash_comps/contact';

const Splash = observer((props) => {

    return (<div className="splash">
            <div className="splash-header">
            <p className="main-heading">Sean Cowan</p>
                <img className="splash-image" src="/images/fullstackdevribbon.png"></img>
                <hr />
            </div>

                <div className="slides">
                    <div className="about slide">
                        <AboutBarker />
                    </div>
                    <div className="project slide">
                        <ProjectCard />
                    </div>
                    <div className="contact slide">
                        <Contact />
                    </div>
                </div>
            </div>);
});

export default Splash;