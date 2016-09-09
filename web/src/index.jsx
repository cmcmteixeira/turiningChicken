import React from 'react';
import ReactDom from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import LoginPage from './components/Login/Login.jsx'

import './index.scss'

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import nameApp from './reducers/nameReducer.js'

var store = createStore(nameApp, {name:'carlos'});
injectTapEventPlugin();


ReactDom.render(
    <Provider store={store}>
        <MuiThemeProvider  muiTheme={getMuiTheme()}>
            <LoginPage/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('main'))