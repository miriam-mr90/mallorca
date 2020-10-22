import React from 'react';
import styled, { css }  from "styled-components";

const StyledMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
`;

const StyledCard = styled.div`
    background: ${props => props.theme.color.neutral000};
    border-radius: 4px;
    box-shadow: -1px 1px 2px rgba(18,42,68,0.1);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    font-size: 12px;
    margin: 8px;
    padding: 16px 12px;
    text-align: center;
    text-transform: uppercase;
    transition: all .2s;
    width: 33%;

    @media ${props => props.theme.device.tablet} {
        max-width: 220px;
        width: auto;
    }

    &:hover {
        cursor: pointer;
    }

    .icon {
        font-size: 28px;
        margin-bottom: 12px;
    }

    ${props => props.active && css`
        color: ${props => props.theme.color.mainDark};
        font-weight: 600;
        transform: rotateZ(3deg);
    `}
`;

const Menu = ({ categories, selectedMenuItem, showMainContent }) => (
    <StyledMenu>
        {categories.map((item, index) => (
            <StyledCard key={index}
                item={item}
                onClick={() => showMainContent(item.label)}
                active={selectedMenuItem === item.label}>
                <i className={`icon icon-${item.icon}`} />
                {item.name}
            </StyledCard>
        ))}
    </StyledMenu>
);

export default Menu;
