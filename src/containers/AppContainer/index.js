import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePageContainer from '../HomePageContainer/index'
import SingleLineGridList from '../../components/gridListComponent'
import ImgMediaCard from '../../components/aboutUsComponent'

const App =()=>(
    <Switch>
        <Route exact path='/' component={ HomePageContainer }/>
        <Route exact path='/hot-items' component={ SingleLineGridList } />
        <Route exact path='/about-us' component={ ImgMediaCard } />
    </Switch>
);

export default App;
