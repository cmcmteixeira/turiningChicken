import React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from './components/HelloWorld/HelloWorld.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin';


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import nameApp from './reducers/nameReducer.js'

var store = createStore(nameApp, {name:'carlos'});
injectTapEventPlugin();

ReactDom.render(
    <Provider store={store}>
        <HelloWorld/>
    </Provider>,
    document.getElementById('main'))