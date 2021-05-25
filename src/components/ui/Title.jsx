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
        font-size: 26px;
        margin: 1.2rem auto;
        max-width: max-content;

        @media ${theme.device.mobileL} {
          font-size: 32px;
        }

        .icon {
            font-size: 36px;
            margin-right: 1rem;
        }
    `}
`;

const Title = ({ title, icon }) => (
    <StyledTitle>
        { icon && <i className={`icon icon-${icon}`} />}
        {title}
    </StyledTitle>
);

export default Title;