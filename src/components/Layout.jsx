import React from 'react';
import styled, { css } from 'styled-components'

import Footer from './Footer'
import Header from './Header';
import Results from '../views/Results';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 0 .8rem;
    width: 100vw;
`;

const StyledWelcomeText = styled.div`
    ${({ theme }) => css`
        align-items: center;
        align-self: center;
        color: ${theme.color.neutral000};
        display: flex;
        flex-direction: column;
        font-size: 16px;
        justify-content: center;
        line-height: 18px;
        margin-top: 7.5rem;
        text-align: center;

        .button {
            margin-top: 1.2rem;
        }

        @media ${theme.device.mobileL} {
            max-width: 60%;
        }
    `}
`;

const MainContent = ({
    categorySelected,
    selectedMenuItem,
    selectedMenuItemIcon,
    filterCategories,
    displayedItems,
    welcomePage
}) => {
    const render = selectedMenuItem !== null ? (
            <Results
                categorySelected={categorySelected}
                selectedMenuItem={selectedMenuItem}
                selectedMenuItemIcon={selectedMenuItemIcon}
                filterCategories={filterCategories}
                displayedItems={displayedItems}/>
        ) : (
            <StyledWelcomeText>
                {welcomePage.text}
                <button className="button">{welcomePage.linkCopy}</button>
            </StyledWelcomeText>
        );

    return render;
};

const Layout = ({
    categories,
    categorySelected,
    displayedItems,
    filterCategories,
    isMenuOpen,
    selectedMenuItem,
    selectedMenuItemIcon,
    showCategoryContent,
    title,
    toggleMenu,
    goHome,
    welcomePage,
    currentPage
}) => (
    <StyledWrapper className={currentPage}>
        <Header title={title}
            categories={categories}
            selectedMenuItem={selectedMenuItem}
            showCategoryContent={showCategoryContent}
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            goHome={goHome}
        />
        { !isMenuOpen && (
            <MainContent
                categorySelected={categorySelected}
                selectedMenuItem={selectedMenuItem}
                selectedMenuItemIcon={selectedMenuItemIcon}
                filterCategories={filterCategories}
                displayedItems={displayedItems}
                welcomePage={welcomePage}
            />
        )}
        <Footer />
    </StyledWrapper>
);

export default Layout;
