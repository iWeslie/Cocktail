import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

const user = {
    firstName: 'Weslie',
    lastName: 'Chen'
}

// ReactDOM.render(<App />, document.getElementById('root'));
const name = 'Weslie'
const element = (
    <h1>Hello, {formatName(user)}</h1>
)
ReactDOM.render(
  element,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
