import React, { Component } from 'react';

import './assets/icons.css';
import Layout from './components/Layout.jsx';

export default class App extends Component {
    constructor(props) {
        super();

        this.state = {
            selectedMenuItem: null,
            categorySelected: props.categories,
            displayedItems: props.categories.items,
        };

        this.updateState= this.updateState.bind(this);
        this.showMainContent = this.showMainContent.bind(this);
        this.filterCategories = this.filterCategories.bind(this);
    }

    updateState(state, value) {
        this.setState({
            [state]: value,
        });
    }

    showMainContent(category) {
        const categoryObj = this.props.categories.find(obj => obj['label'] === category);

        this.updateState('selectedMenuItem', category);
        this.updateState('categorySelected', categoryObj);
        this.updateState('displayedItems', categoryObj.items);
    }

    filterCategories(filterBy, value) {
        let displayedItemsObj = this.state.categorySelected.items;

        if (value !== 'all') {
            displayedItemsObj = displayedItemsObj.filter(obj => obj[filterBy] === value );
        }

        this.updateState('displayedItems', displayedItemsObj);
    }

    render() {
        console.log(this.props)
        return (
            <Layout
                {...this.props}
                {...this.state}
                showMainContent={this.showMainContent}
                filterCategories={this.filterCategories}
            />
        );
    }
}
