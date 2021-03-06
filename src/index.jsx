import 'babel-polyfill';    // To include Map and Set objects needed for React v16 on older browsers
import 'raf/polyfill';      // requestAnimationFrame polyfill needed for React v16 on older browsers

import React                from 'react';
import ReactDOM             from 'react-dom';

import {createStore, applyMiddleware}        from 'redux';
import thunk                from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers             from './reducers';

import AppComponent from './components/AppComponent';

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(<AppComponent store={store} />, document.getElementById('app'));
