import React from 'react';

const Title = ({ title, icon }) => (
    <h2 className="title">
        { icon && <i className={`icon icon-${icon}`} />}
        {title}
    </h2>
);

export default Title;