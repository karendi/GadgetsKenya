import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './containers/AppContainer/index'
import configureStore from './reduxSetup/configureStore'

// const store = configureStore();

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)