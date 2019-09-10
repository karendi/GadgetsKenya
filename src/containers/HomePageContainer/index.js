import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact"
import ButtonAppbar from '../../components/headerComponent'
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import style from './styles.scss'

class HomePageContainer extends Component {
    constructor(){
        super()
        this.state={
            isLoading: true
        }
    }
    render(){
        return(
        <div>
            <ButtonAppbar/>
            <CarouselPage />
            </div>
            )
        }
    }

    const CarouselPage = () => {
      return (
        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={false}
            showIndicators={false}
            className="z-depth-1"
            slide
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="sliderImage"
                    src={slider1}
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="sliderImage"
                    src={slider2}
                    alt="Second slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="sliderImage"
                    src={slider3}
                    alt="Third slide"
                  />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      );
    }
    
    export default HomePageContainer;
    