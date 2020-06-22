import React from 'react';
import { inject, observer } from 'mobx-react';

const Contact = observer((props) => {
    return (
    <div className="contact-container slide-items">
        <div className="contact-text" contenteditable>
        </div>
    </div>
    );
});

export default Contact;


