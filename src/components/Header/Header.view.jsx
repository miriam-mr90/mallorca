import React from 'react';
import { MenuButton, MenuContent } from '../Menu/Menu';

const Header = ({
    title,
    isMenuOpen,
    toggleMenu,
    categories,
    selectedMenuItem,
    showCategoryContent,
    goHome,
    stickyPosition
}) => (
    <>
        <header className={`header${stickyPosition ? ' header--sticky' : ''}`}>
            <h1 className="header__title" onClick={() => goHome()} >
              {title}
              <span className="header__sub-title">life</span>
            </h1>
            <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        </header>
        {isMenuOpen && (
            <MenuContent categories={categories}
                selectedMenuItem={selectedMenuItem}
                showCategoryContent={showCategoryContent}
            />
        )}
    </>
);

export default Header;
