import React from 'react';
import styled, { css } from 'styled-components'

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

        .link {
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
    welcomeText
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
                {welcomeText}
                <a href="#" className="link link--animated">Link copy</a>
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
    welcomeText,
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
                welcomeText={welcomeText}
            />
        )}
    </StyledWrapper>
);

export default Layout;
