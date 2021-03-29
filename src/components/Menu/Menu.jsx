import React from 'react';
import styled, { css }  from "styled-components";
import { Turn as Hamburger } from 'hamburger-react'

const StyledMenu = styled.div`
    ${({ theme, active }) => css`
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 2rem;

        @media ${theme.device.mobileL} {
            align-self: center;
            flex-direction: row;
            max-width: 800px;

        }
    `}
`;

const StyledMenuItem = styled.div`
    ${({ theme, active }) => css`
        align-items: center;
        background: ${theme.color.neutral000};
        border-radius: .4rem;
        box-shadow: -1px 1px 2px rgba(18,42,68,0.1);
        box-sizing: border-box;
        display: flex;
        font-size: 13px;
        margin: .4rem 0;
        padding: 1.2rem;
        text-align: center;
        text-transform: uppercase;
        transition: all .2s;

        @media ${theme.device.mobileL} {
            width: 220px;
            margin: 6px;
            text-align: left;
        }

        &:hover {
            cursor: pointer;
        }

        .icon {
            font-size: 24px;
            margin-right: 12px;
        }

        ${active && css`
            color: ${theme.color.mainDark};
            font-weight: 600;
            transform: rotateZ(3deg);
        `}
    `}
`;

const StyledMenuButton = styled(Hamburger)`
    display: none;
`;

const MenuButton = ({ isMenuOpen, toggleMenu }) => (
    <StyledMenuButton rounded
        toggle={() => toggleMenu()}
        toggled={isMenuOpen}
    />
);

const MenuContent = ({
    categories,
    selectedMenuItem,
    showMainContent,
}) => (
    <StyledMenu>
        {categories.map((item, index) => (
            <StyledMenuItem key={index}
                item={item}
                onClick={() => showMainContent(item.label, item.icon)}
                active={selectedMenuItem === item.label}>
                <i className={`icon icon-${item.icon}`} />
                {item.name}
            </StyledMenuItem>
        ))}
    </StyledMenu>
);

export {
    MenuContent,
    MenuButton,
};

