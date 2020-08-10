import React from 'react';
import { inject, observer } from 'mobx-react';

const Footer = inject('helpers')(observer((props) => {

    return (
        <div className="footer-container">
            <div className="footer-nav">
                    <img className="footer-back footer-images click-pointer" src="/images/backward.png" onClick={(e) => {
                        props.helpers.handleSlideChange(props.helpers.findCurrentSlideInfo(), props.helpers.findPrevSlideInfo(), 'backward', 'animate__bounceInUp', 'animate__bounceInUp', 'animate__bounceOutDown')
                    }}/>
                    <img className="footer-forward click-pointer" src="/images/forward.png" onClick={(e) => {
                        props.helpers.handleSlideChange(props.helpers.findCurrentSlideInfo(), props.helpers.findNextSlideInfo(), 'forward', 'animate__bounceInUp', 'animate__bounceInUp', 'animate__bounceOutDown')
                    }}/>
            </div>
        </div>
    );
}));

export default Footer;


