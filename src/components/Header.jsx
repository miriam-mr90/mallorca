import React from 'react';
import styled, { css } from "styled-components";
import { MenuButton, MenuContent } from './Menu/Menu.jsx';

const StyledHeader = styled.header`
    ${({ theme }) => css`
        align-items: center;
        color: ${theme.color.neutral000};
        display: flex;
        justify-content: space-between;
        padding: 1.2rem 0;
        text-shadow: 2px 2px 2px rgba(155,155,155,0.49);

        h1 {
            font-size: 36px;
            font-weight: bold;
            margin: 0;

            &:hover {
                cursor: pointer;
            }

            @media ${theme.device.mobileL} {
                justify-content: center;
                flex: 1;
                transform: translateX(24px); // hamburger-menu width/2
                text-align: center;
            }
        }
    `}
`;

const Header = ({
    title,
    isMenuOpen,
    toggleMenu,
    categories,
    selectedMenuItem,
    showMainContent,
    goHome,
}) => (
    <>
        <StyledHeader>
            <h1 onClick={() => goHome()} >{title}</h1>
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
