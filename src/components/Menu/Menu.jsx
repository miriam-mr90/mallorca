import React from 'react';
import { Turn as Hamburger } from 'hamburger-react'

const MenuButton = ({ isMenuOpen, toggleMenu }) => (
    <Hamburger rounded
        toggle={() => toggleMenu()}
        toggled={isMenuOpen}
        className="menu__toggle"
    />
);

const MenuContent = ({
    categories,
    selectedMenuItem,
    showMainContent,
}) => (
    <ul className="menu">
        {categories.map((item, index) => (
            <li className="menu__item"
                key={index}
                onClick={() => showMainContent(item.label, item.icon)}
                data-active={selectedMenuItem === item.label}
            >
                <i className={`icon icon-${item.icon}`} />
                {item.name}
            </li>
        ))}
    </ul>
);

export {
    MenuContent,
    MenuButton,
};

