import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

import HousingList from './HousingList';
import HousingDetail from './HousingDetail';
import SearchForm from './SearchForm';

export const MainNavigator = StackNavigator({
    list: {
        screen: HousingList,
        path: 'list',
    },
    detail: {
        screen: HousingDetail,
        path: 'detail/:id',
    },
    search: {
        screen: SearchForm,
        path: 'search',
    },
});

class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <MainNavigator 
                dispatch={this.props.dispatch}
                state={this.props.nav}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
});

export default connect(mapStateToProps)(Main);