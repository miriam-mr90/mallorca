import React from 'react';

import {ReactComponent as NoResultsImage} from '../assets/images/no-results.svg';

const ErrorMessage = ({ type }) => (
    <section className="error-message">
        <NoResultsImage className="error-message__image"/>
        <span className="error-message__title">Whoops!</span>
        <p className="error-message__description">Sorry, we couldn't find any result matching</p>
    </section>
);

export default ErrorMessage;
