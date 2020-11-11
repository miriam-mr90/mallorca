import React from 'react';
import styled from "styled-components";
import { MenuButton, MenuContent } from './Menu/Menu.jsx';

const StyledHeader = styled.header`
    align-items: center;
    color: ${props => props.theme.color.neutral000};
    display: flex;
    justify-content: space-between;
    padding: 1.2rem;
    text-shadow: 2px 2px 2px rgba(155,155,155,0.49);

    h1 {
        font-size: 36px;
        margin: 0;
    }
`;

const Header = ({
    title,
    isMenuOpen,
    toggleMenu,
    categories,
    selectedMenuItem,
    showMainContent,
}) => (
    <>
        <StyledHeader>
            <h1>{title}</h1>
            <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        </StyledHeader>
        {isMenuOpen && (
            <MenuContent categories={categories}
                selectedMenuItem={selectedMenuItem}
                showMainContent={showMainContent}
            />
        )}
    </>
);

export default Header;
