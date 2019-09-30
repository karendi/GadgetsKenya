import React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory } from 'history'
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './containers/AppContainer/index'
import configureStore from './reduxSetup/configureStore'

const store = configureStore();
const customHistory = createBrowserHistory();

render(
    <Provider store={store}>
    <Router history={customHistory}>
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
    </Router>
    </Provider>,
    document.getElementById('root')
)