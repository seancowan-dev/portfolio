import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import ProjectCard from './splash_comps/project-card';
import AboutBarker from './splash_comps/about-barker';

const Splash = observer((props) => {
    return (<div className="splash">
        <p className="main-heading">Sean Cowan</p>
        <img className="splash-image" src="/images/fullstackdevribbon.png"></img>
        <hr />
            <AboutBarker />
            <ProjectCard />
            <img src="/images/contactme.png"></img>
        </div>
    );
});

export default Splash;