import 'babel-polyfill';    // To include Map and Set objects needed for React v16 on older browsers
import 'raf/polyfill';      // requestAnimationFrame polyfill needed for React v16 on older browsers

import React                from 'react';
import ReactDOM             from 'react-dom';

import AppComponent from './components/AppComponent';



ReactDOM.render(<AppComponent />, document.getElementById('app'));