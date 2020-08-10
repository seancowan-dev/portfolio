import React from 'react';
import { inject, observer } from 'mobx-react';

const AboutBarker = inject('helpers')(observer((props) => {
    return (<>
        <div className="about-barker-container">
                <div className="about-barker-text" contentEditable>
                    <div className="space-one"></div>
                    <div className="space-two"></div>
                    <div className="space-three"></div>
                    <div className="space-four"></div>
                    <div className="space-five"></div>
                    I've got a condition about coding scripts, I'm quite fond of libraries and widgets. Pardon my presumption but you'll want me to code you some higher order functions. If interactivity is what you seek then React will make things really neat.  Add to that a responsive design and soon your site will really shine!  
                    Solving problems is one thing that I like a lot, so why not give me a shot?</div>
        
        </div>
        </>
    );
}));

export default AboutBarker;


