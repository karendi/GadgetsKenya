import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePageContainer from '../HomePageContainer/index'

const App =()=>(
    <Switch>
        <Route exact path='/' component={ HomePageContainer }/>
    </Switch>
);

export default App;
