import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App appTitle="Person Manager"/>, document.getElementById('root'));
// Inserting the "appTitle" allows us to use "this.props" within the main App.js. For now it seems relatively unimpressive, but I'm sure there'll be more
// important usage of this later on...

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
