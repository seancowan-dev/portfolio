import React from 'react';
import { inject, observer } from 'mobx-react';
import Splash from '../../view_comps/splash/Splash';
import uuid from 'uuid';

const Primary = observer((props) => {
    return (
        <div className="primary-content">
        <div className="overlay two"></div>
            <Splash />
        </div>
    );    
});

export default Primary;