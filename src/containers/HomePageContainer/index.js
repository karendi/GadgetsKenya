import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CarouselPage from '../../components/carouselComponent'
import ButtonAppbar from '../../components/headerComponent'
import SingleLineGridList from '../../components/gridListComponent'
import ImgMediaCard from '../../components/aboutUsComponent'
import style from './styles.scss'

class HomePageContainer extends Component {
    constructor(){
        super()
        this.state={
            isLoading: true
        }
    }
    onProfileClick (){
      alert("I have been clicked")
    }

    render(){
        return(
        <div className="home" >
            <ButtonAppbar clickHandler={ this.onProfileClick }/>
            <CarouselPage />
            <SingleLineGridList />
            <ImgMediaCard />
            </div>
            )
        }
    }
    
    export default HomePageContainer;
    