import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import myReducers from './reducers'
import { legacy_createStore as createStore } from 'redux'
import { createRoot } from 'react-dom/client';
//Create the store
const myStore = createStore(myReducers);

//This will console log the current state everytime the state changes
myStore.subscribe(() => console.log(myStore.getState()));

//Enveloping the App inside the Provider, ensures that the states in the store are available
//throughout the application
//const root = createRoot(myStore);
//root.render(<Provider store={myStore}><App /></Provider>, document.getElementById('root'))
ReactDOM.render(<Provider store={myStore}><App /></Provider>, document.getElementById('root'));