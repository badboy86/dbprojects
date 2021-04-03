import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children,isgooglesignIn,...otherProps}) => (
    <button className={`${isgooglesignIn?'google-sign-in':''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;