import React from 'react';
import styled, { css }  from "styled-components";

const StyledMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 36px;
`;

const StyledCard = styled.div`
    background: ${props => props.theme.color.neutral000};
    border-radius: 4px;
    box-shadow: -1px 1px 2px rgba(18,42,68,0.1);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex: 1;
    font-size: 13px;
    margin-left: 12px;
    margin-right: 12px;
    padding: 24px 20px;
    text-align: center;
    text-transform: uppercase;
    transition: transform .2s;

    &:hover {
        cursor: pointer;
    }

    .icon {
        font-size: 42px;
        margin-bottom: 16px;
    }

    ${props => props.active && css`
        border-bottom: ${props => `2px solid ${props.theme.color.mainDark}`};
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
