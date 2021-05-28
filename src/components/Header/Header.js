import React, { Component } from 'react';

import View from './Header.view';

export default class Header extends Component {
    constructor(props) {
      super();

      this.state = {
          stickyPosition: false
      };

      this.setMenuPosition= this.setMenuPosition.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.setMenuPosition);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    setMenuPosition() {
        this.setState({ stickyPosition: window.pageYOffset > 48 });
    }

    render() {
        return (
            <View
                {...this.props}
                {...this.state}
            />
        );
    }
}
