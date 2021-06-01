import React, { Component } from 'react';

import './assets/icons.css';
import './assets/stylesheets/main.scss';
import Layout from './components/Layout';

export default class App extends Component {
    constructor(props) {
        super();

        this.state = {
            currentPage: 'home',
            selectedMenuItem: null,
            selectedMenuItemIcon: null,
            categorySelected: props.categories,
            displayedItems: props.categories.items,
            isMenuOpen: false,
        };

        this.updateState= this.updateState.bind(this);
        this.showCategoryContent = this.showCategoryContent.bind(this);
        this.filterCategories = this.filterCategories.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.goHome = this.goHome.bind(this);
    }

    updateState(state, value) {
        this.setState({
            [state]: value,
        });
    }

    toggleMenu() {
        this.setState(prevState => ({
            isMenuOpen: !prevState.isMenuOpen
        }));
    }

    goHome() {
        if(this.state.isMenuOpen === true) {
            this.toggleMenu();
        };

        this.setState({
            'selectedMenuItem': null,
            'currentPage': 'home'
        });
    }

    showCategoryContent(category, categoryIcon) {
        const categoryObj = this.props.categories.find(obj => obj['label'] === category);

        this.setState({
            'selectedMenuItem': categoryObj.label,
            'selectedMenuItemIcon': categoryIcon,
            'categorySelected': categoryObj,
            'displayedItems': categoryObj.items,
            'currentPage': 'category'
        });

        this.toggleMenu();
    }

    filterCategories(filterBy, value) {
        let displayedItemsObj = this.state.categorySelected.items;

        if (value.toLowerCase() !== 'all') {
            displayedItemsObj = displayedItemsObj.filter(obj => {
              const itemFilters = obj[filterBy].map(item => item.toLowerCase());
              return itemFilters.includes(value.toLowerCase())});
        }

        this.updateState('displayedItems', displayedItemsObj);
    }

    render() {
        return (
            <Layout
                {...this.props}
                {...this.state}
                showCategoryContent={this.showCategoryContent}
                filterCategories={this.filterCategories}
                toggleMenu={this.toggleMenu}
                goHome={this.goHome}
            />
        );
    }
}
