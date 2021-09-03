import React from 'react';
import {Row, Col} from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import "../PageCss/moreMe.css";


import Img1 from "../Assets/HiddenTab/IMG_5557.JPG";
import Img2 from "../Assets/HiddenTab/D4DE7182-5909-496D-9B14-4D0DD3F7F4F3.jpg";
import Img3 from "../Assets/HiddenTab/IMG_5864.jpg";
import Img4 from "../Assets/HiddenTab/IMG_7041-EFFECTS.jpg";
import Img5 from "../Assets/HiddenTab/IMG_8932.png";
import Img6 from "../Assets/HiddenTab/IMG_8613.jpg";
import Img7 from "../Assets/HiddenTab/IMG_8066.jpg";
import Img8 from "../Assets/HiddenTab/IMG_7901.png";
import Img9 from "../Assets/HiddenTab/IMG_7049.jpg";
import Img10 from "../Assets/HiddenTab/IMG_8558.jpg";
import Img11 from "../Assets/HiddenTab/IMG_8098.jpg";


const responsive = {
	superLargeDesktop: {
	  // the naming can be any, depends on you.
	  breakpoint: { max: 4000, min: 3000 },
	  items: 5
	},
	desktop: {
	  breakpoint: { max: 3000, min: 1024 },
	  items: 4
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


const MoreMe = () => {
	return (
		<div
		style={{
			// display: 'flex',
			// justifyContent: 'Right',
			// alignItems: 'Right',
			height: '100vh'
		}}
		>
			<h1>Hidden Page Vibz...</h1>
			{/* <img src={Picture1} /> */}
			{/* <p>Also maybe change the page name from moreMe to something about it being hidden so no-one can type it in</p> */}

			<Carousel 
				responsive={responsive}
				// showDots={true}
				arrows={false}
				autoPlay={true}
				autoPlaySpeed={5000}
				infinite={true}

				
			>
				<div className="imgDiv">
					<img src={Img1} className="carouselImg" />
				</div>
				<div className="imgDiv"><img src={Img2} className="carouselImg" /></div>
				<div className="imgDiv"><img src={Img3} className="carouselImg" /></div>
				<div className="imgDiv"><img src={Img4} className="carouselImg" /></div>
			</Carousel>

			<Carousel 
				responsive={responsive}
				// showDots={true}
				arrows={false}
				autoPlay={true}
				autoPlaySpeed={5000}
				infinite={true}

				
			>
				<div className="imgDiv">
					<img src={Img5} className="carouselImg" />
				</div>
				<div className="imgDiv"><img src={Img6} className="carouselImg" /></div>
				<div className="imgDiv"><img src={Img7} className="carouselImg" /></div>
				<div className="imgDiv"><img src={Img8} className="carouselImg" /></div>
			</Carousel>
			<Carousel 
				responsive={responsive}
				// showDots={true}
				arrows={false}
				autoPlay={true}
				autoPlaySpeed={5000}
				infinite={true}

				
			>
				<div className="imgDiv">
					<img src={Img9} className="carouselImg" />
				</div>
				<div className="imgDiv"><img src={Img10} className="carouselImg" /></div>
				<div className="imgDiv"><img src={Img11} className="carouselImg" /></div>
				<div className="imgDiv"><img src={Img4} className="carouselImg" /></div>
			</Carousel>

			{/* <Row
				style={{
					padding:"20px",
					position: "relative",
//   display: "none",
				}}
			>
				<Col
					style={{
						float: "left",
						  width: "15%",
						  height:"25%",

  						// paddingLeft: "10px",
						border: "1px solid green",
						
						overflow:"hidden",
					}}
				><img src={Manifest} /></Col>
				
				<Col
					style={{
						float: "left",
						  width: "15%",
						  height:"15%",
  						// padding: "10px",
						border: "1px solid green",
						overflow:"hidden",
					}}
				><img src={Manifest} /></Col>
				<Col
					style={{
						float: "left",
						  width: "15%",
						  height:"15%",
  						// padding: "10px",
						border: "1px solid green",
						overflow:"hidden",
					}}
				><img src={Manifest} /></Col>
				<Col
					style={{
						float: "left",
						  width: "15%",
						  height:"15%",
  						// padding: "10px",
						border: "1px solid green",
						overflow:"hidden",
					}}
				><img src={Manifest} /></Col>
				

			</Row> */}
		</div>
	);
};

export default MoreMe;