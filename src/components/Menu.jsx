import React from 'react';
import styled, { css }  from "styled-components";

const StyledMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
`;

const StyledMenuItem = styled.div`
    ${({ theme, active }) => css`
        background: ${theme.color.neutral000};
        border-radius: 4px;
        box-shadow: -1px 1px 2px rgba(18,42,68,0.1);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        margin: 8px;
        padding: 16px 12px;
        text-align: center;
        text-transform: uppercase;
        transition: all .2s;
        width: calc(50% - 16px);

        @media ${theme.device.tablet} {
            flex: 1;
            width: auto;
            max-width: 220px;
        }

        &:hover {
            cursor: pointer;
        }

        .icon {
            font-size: 28px;
            margin-bottom: 12px;
        }

        ${active && css`
            color: ${theme.color.mainDark};
            font-weight: 600;
            transform: rotateZ(3deg);
        `}

    `}
`;

const Menu = ({ categories, selectedMenuItem, showMainContent }) => (
    <StyledMenu>
        {categories.map((item, index) => (
            <StyledMenuItem key={index}
                item={item}
                onClick={() => showMainContent(item.label)}
                active={selectedMenuItem === item.label}>
                <i className={`icon icon-${item.icon}`} />
                {item.name}
            </StyledMenuItem>
        ))}
    </StyledMenu>
);

export default Menu;
