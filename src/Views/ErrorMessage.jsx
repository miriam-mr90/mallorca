import React from 'react';
import styled, { css } from "styled-components";

import {ReactComponent as NoResultsImage} from '../assets/images/no-results.svg';

const StyledMessage = styled.div`
    ${({ theme }) => css`
        align-items: center;
        color: ${theme.color.neutral000};
        display: flex;
        flex-direction: column;
        padding-top: 50px;
    `}
`;

const StyledImage = styled(NoResultsImage)`
    ${({ theme }) => css`
        fill: ${theme.color.neutral000};
        height: auto;
        width: 62px;
        margin-bottom: 20px;
    `}
`;

const ErrorMessage = ({ type }) => (
    <StyledMessage>
        <StyledImage />
        <span>Whoops!</span>
        <p>Sorry, we couldn\'t find any result matching</p>
    </StyledMessage>
);

export default ErrorMessage;
