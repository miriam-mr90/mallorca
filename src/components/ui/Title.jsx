import React from 'react';
import styled, { css } from "styled-components";

const StyledTitle = styled.h2`
    ${({ theme }) => css`
        align-items: center;
        color: ${theme.color.neutral000};
        display: flex;
        justify-content: center;
        text-transform: capitalize;
        font-weight: 500;
        font-size: 26px;
        margin: 1.2rem auto 2rem;
        max-width: max-content;

        .icon {
          font-size: 30px;
          margin-right: 1rem;
        }

        @media ${theme.device.mobileL} {
          font-size: 32px;

          .icon {
              font-size: 38px;
          }
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