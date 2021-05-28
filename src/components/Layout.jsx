import React from 'react';
import styled, { css } from 'styled-components'

import Header from './Header.jsx';
import Results from '../views/Results.jsx';
import BackgroundImage from "../assets/images/app_bg.jpg";
import BackgroundVideo from "../assets/images/app_bg_video.mp4";

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
        color: #FFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 9.5rem;
        text-align: center;

        button {
            appearance: none;
            background: ${theme.color.main};
            border-radius: .4rem;
            border: 0;
            color: ${theme.color.neutral000};
            margin-top: 1.2rem;
            padding: .6rem .8rem;
            width: max-content;
        }

        @media ${theme.device.mobileL} {
            max-width: 60%;
        }
    `}
`;

const StyledBgVideo = styled.video`
    height: 100vh;
    left: 0;
    object-fit: cover;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: -1;
    opacity: .6;
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
}

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
        {/* <StyledBgVideo playsInLine autoPlay muted loop poster={BackgroundImage}>
            <source src={BackgroundVideo} type="video/mp4" />
        </StyledBgVideo> */}
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
