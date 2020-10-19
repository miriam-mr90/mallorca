import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'

import Header from './Header.jsx';
import Main from './Main.jsx';
import Menu from './Menu.jsx';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
`;

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        src: local('Open Sans'), local('OpenSans'),
            url('../src/assets/fonts/Raleway-VariableFont_wght.ttf') format('truetype'), /* Safari, Android, iOS */
    }

    body {
        font-family: 'Raleway', sans-serif;
        font-size: 14px;
        background: ${props => props.theme.color.main};
        color: ${props => props.theme.color.text};
        margin: 0;
    }
`;

const Layout = ({
    title,
    categories,
    selectedMenuItem,
    categorySelected,
    displayedItems,
    showMainContent,
    filterCategories,
}) => (
    <StyledWrapper>
        <GlobalStyle />
        <Header title={title} />
        <Menu categories={categories}
            selectedMenuItem={selectedMenuItem}
            showMainContent={showMainContent}/>

        { selectedMenuItem !== null && (
            <Main
                categorySelected={categorySelected}
                filterCategories={filterCategories}
                displayedItems={displayedItems}/>
        )}
    </StyledWrapper>
);

export default Layout;
