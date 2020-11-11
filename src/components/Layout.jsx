import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components'
import BackgroundImage from "../assets/images/app_bg.jpg";

import Header from './Header.jsx';
import Results from '../views/Results.jsx';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
`;

const GlobalStyle = createGlobalStyle`
    ${({ theme }) => css`
        @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            src: local('Open Sans'), local('OpenSans'),
                url('../assets/fonts/Raleway-VariableFont_wght.ttf') format('truetype'), /* Safari, Android, iOS */
        }

        * {
            box-sizing: border-box;
        }

        body {
            font-family: 'Raleway', sans-serif;
            font-size: 14px;
            background-image: linear-gradient(360deg, rgb(160, 222, 219),rgb(3, 165, 209));
            background-image: url(${BackgroundImage});
            background-position: left top;
            background-repeat: no-repeat;
            background-size: cover;
            color: ${theme.color.text};
            margin: 0;
        }
    `}
`;

const Layout = ({
    title,
    categories,
    selectedMenuItem,
    selectedMenuItemIcon,
    categorySelected,
    displayedItems,
    showMainContent,
    filterCategories,
    isMenuOpen,
    toggleMenu,
}) => (
    <StyledWrapper>
        <GlobalStyle />
        <Header title={title}
            categories={categories}
            selectedMenuItem={selectedMenuItem}
            showMainContent={showMainContent}
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
        />
        { (!isMenuOpen && selectedMenuItem !== null) && (
            <Results
                categorySelected={categorySelected}
                selectedMenuItem={selectedMenuItem}
                selectedMenuItemIcon={selectedMenuItemIcon}
                filterCategories={filterCategories}
                displayedItems={displayedItems}/>
        )}
    </StyledWrapper>
);

export default Layout;
