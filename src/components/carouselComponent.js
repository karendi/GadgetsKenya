import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact"
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.jpg'

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
                 <h2><span>Welcome to <br/> Gadgets Kenya </span></h2>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="sliderImage"
                  src={slider2}
                  alt="Second slide"
                />
                <h2><span>Get the latest gadgets...</span></h2>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="sliderImage"
                  src={slider3}
                  alt="Third slide"
                />
                 <h2><span>Get them at a fair price</span></h2>
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
}

export default CarouselPage
