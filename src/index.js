import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// Google Analytics
ReactGA.initialize('UA-129691270-1');
ReactGA.pageview(window.location.pathname + window.location.search);

console.log('Wer das liest ist doof.');