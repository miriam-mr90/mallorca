import React from 'react';
import styled, { css } from "styled-components";

const StyledTitle = styled.h2`
    ${({ theme }) => css`
        align-items: center;
        color: ${theme.color.neutral000};
        display: flex;
        justify-content: center;
        text-transform: capitalize;
        font-weight: normal;

        .icon {
            font-size: 32px;
            margin-left: 1rem;
        }
    `}
`;

const Title = ({ title, icon }) => (
    <StyledTitle>
        {title}
        {/* { icon && <i className={`icon icon-${icon}`} />} */}
    </StyledTitle>
);

export default Title;