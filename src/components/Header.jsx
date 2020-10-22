import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.header`
    color: ${props => props.theme.color.neutral000};
    display: flex;
    justify-content: center;
    text-shadow: 2px 2px 2px rgba(155,155,155,0.49);

    h1 {
        font-size: 36px;
    }
`;

const Header = ({ title }) => (
    <StyledHeader>
        <h1>{title}</h1>
    </StyledHeader>
);

export default Header;
