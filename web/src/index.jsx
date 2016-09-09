import React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from './components/HelloWorld/HelloWorld.jsx'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import nameApp from './reducers/nameReducer.js'

var store = createStore(nameApp, {name:'carlos'});

ReactDom.render(
    <Provider store={store}>
        <HelloWorld/>
    </Provider>,
    document.getElementById('main'))