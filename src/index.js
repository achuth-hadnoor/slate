import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createHashHistory, createBrowserHistory } from 'history';
import isElectron from 'is-electron'
// import reportWebVitals from './reportWebVitals';
import { Store } from './Store';
import Router from './Router';


let history;
if (isElectron()) {
	history = createHashHistory(); 
} else {
	history = createBrowserHistory(); 
}

ReactDOM.render(
  <React.StrictMode>
      <Provider store={Store}>
        <Router history={history}/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
