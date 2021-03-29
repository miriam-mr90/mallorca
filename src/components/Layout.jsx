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
    width: 100vw;
    padding: 0 .8rem;
`;

const StyledWelcomeText = styled.div`
    ${({ theme }) => css`
        color: #FFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 9.5rem;

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
                <button>Button copy</button>
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
    showMainContent,
    title,
    toggleMenu,
    goHome,
    welcomeText,
}) => (
    <StyledWrapper>
        <StyledBgVideo playsInLine autoPlay muted loop poster={BackgroundImage}>
            {/* <source src="polina.webm" type="video/webm"> */}
            <source src={BackgroundVideo} type="video/mp4" />
        </StyledBgVideo>
        <Header title={title}
            categories={categories}
            selectedMenuItem={selectedMenuItem}
            showMainContent={showMainContent}
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
