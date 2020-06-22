import React from 'react';
import { inject, observer } from 'mobx-react';

const ProjectCard = observer((props) => {
    let handlePrev = (evt) => {
        console.log(evt);
    }
    let handleNext = (evt) => {
        console.log(evt);
    }
    return (
        <div className="project-card-container slide-items">
                <img className="project-heading" src="/images/projects/findthatmovie/titlebanner.png" />
                <img className="screenshots-button click-pointer" src="/images/screens.png" />
                <img className="gitbox info-buttons click-pointer" src="/images/gitbox.png" />
                <img className="liveapp info-buttons click-pointer" src="/images/liveapp.png" />
            <p className="project-card-text" contenteditable>
            First version of Findthatmovie, developed to demonstrate my knowledge of RESTful APIs and jQuery.  The second version of this is developed in React/Node and both apps together illustrate my journey as a developer.
            </p>
            <div className="project-card-bullets-container">
                <p className="project-bullets-text">
                HTML 5, CSS 3, JavaScript, jQuery
                </p>
                <img className="built-using" src="/images/built-using.png" />
            </div>
            <img className="inner-prev click-pointer" src="/images/innerprev.png" onClick={(e) => {handlePrev(e)}} />
            <img className="inner-next click-pointer" src="/images/innernext.png" onClick={(e) => {handleNext(e)}} />
        </div>
    );
});

export default ProjectCard;
