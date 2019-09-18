import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CarouselPage from '../../components/carouselComponent'
import ButtonAppbar from '../../components/headerComponent'
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
        <div>
            <ButtonAppbar clickHandler={ this.onProfileClick }/>
            <CarouselPage />
            </div>
            )
        }
    }
    
    export default HomePageContainer;
    