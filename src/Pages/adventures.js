import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import "../PageCss/adventures.css";

import Img1 from "../Assets/Adventures/IMG_2086.jpg";
import Img2 from "../Assets/Adventures/IMG_4553.JPG";
import Img3 from "../Assets/Adventures/IMG_5751.PNG";
import Img4 from "../Assets/Adventures/IMG_8265.jpg";

const responsive = {
	superLargeDesktop: {
	  // the naming can be any, depends on you.
	  breakpoint: { max: 4000, min: 3000 },
	  items: 4
	},
	desktop: {
	  breakpoint: { max: 3000, min: 1024 },
	  items: 3
	},
	tablet: {
	  breakpoint: { max: 1024, min: 464 },
	  items: 2
	},
	mobile: {
	  breakpoint: { max: 464, min: 0 },
	  items: 1
	}
  };

const Adventures = () => {
return (
	<div
	style={{
		// display: 'flex',
		// justifyContent: 'Right',
		// alignItems: 'Right',
		height: '100vh'
	}}
	>
	<h1>Page Dedicated to My Adventures</h1>

    <Carousel 
				responsive={responsive}
				// showDots={true}
				arrows={false}
				autoPlay={true}
				autoPlaySpeed={10000}
				infinite={true}		
	>
        <div className="imgDiv"><img src={Img1} className="carouselAdv" /></div>
        <div className="imgDiv"><img src={Img2} className="carouselAdv" /></div>
        <div className="imgDiv"><img src={Img3} className="carouselAdv" /></div>
        <div className="imgDiv"><img src={Img4} className="carouselAdv" /></div>
    </Carousel>
	
    <div 
        style={{
            // display: 'col',
            // justifyContent: 'Right',
            float: "left",
            paddingLeft:"1%",
            // height: '100vh'
        }}
    >
        <h1>My Bucket List:</h1>
        <ul>
            <li>Go to the Utah Salt Flats</li>
            <li>Snowboard</li>
            <li>Paddleboard</li>
            <li>Surf?</li>
            <li>Skydive</li>
        </ul>
    </div>
	</div>
);
};

export default Adventures;