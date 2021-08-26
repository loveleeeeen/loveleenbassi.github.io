import React from 'react';
import "../PageCss/index.css";
import {Row, Col} from 'react-bootstrap';

//import HomeImg from "../Assets/sittingInWindow.png";
import HomeImg from "../Assets/standingAtABusStop.jpg";
import MoreMe from "./moreMe";

const Home = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
        height: '100vh',
		backgroundColor:"#F4F1DE",
		color: "#E07A5F",
	}}
	>
		<Row 
			style={{
				width:"100%",
				marginTop:"100px",
				marginLeft: "20px",
				marginRight: "20px",
		}}>
			<Col 
				style={{
					// display:"inLine",
					// alignContent: "center",
					width:"50%",
					float:"left",
					marginLeft:"60px",
					// marginRight: "200px",
					// backgroundColor:"black",
				}}>
				<h1 
					style={{
						fontSize:"80px",
					}}
				>
					Hey Hey <a href="MoreMe" style={{textDecoration:"none", color:"#7A5C58", cursor:"default",}}>!</a>
				</h1>
				<p 
					style={{
						fontSize:"25px",
					}}
				> 
					Welcome to my website!! It's still under construction but feel free to look around!
				</p>
				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
				<p style={{textAlign:"left"}}>Note to self: 
					
					<li>img doesn't conform to window size</li>
					<li>include the footer after landing page is done</li>
					<li>add landing text</li>
					
				</p>
				
			</Col>
			<Col 
				style={{
					float: "right",
					// backgroundColor:"red",
				}} 
			>
				<div style={{
					
					height:"40rem",
					width: "40rem",
					overflow: "hidden",
					borderRadius: "50%",
					position: "relative",
					// marginRight:"20px",
				}}>
					<img src= {HomeImg} 
						alt="Loveleen standing at a bus stop." 
						style={{
							position: "absolute",
							top: "-965px",
							left: "-270px",
							// top: "-60.6rem",
							// left: "-17rem",
							transform: "scale(0.55)"
						}} 
					/>
				</div>
				
			</Col>
		</Row>
	
	</div>
);
};

export default Home;