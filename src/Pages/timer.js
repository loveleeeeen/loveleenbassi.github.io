import React from 'react';
import "../PageCss/timer.css";
import FirstTimer from "../Countdown/firstTimer";
import SecTimer from "../Countdown/secTimer";
import Timer3 from "../Countdown/Timer3";
import Timer4 from "../Countdown/Timer4";
import Timer5 from "../Countdown/Timer5";
import Timer6 from "../Countdown/Timer6";
import {Col, Row} from "react-bootstrap";

const Timer = () => {

	return (
		<div
		style={{
			display: 'flex',
			justifyContent: 'center',
			// alignItems: 'center',
			height: '100vh',
		}}
		>
			<div className="left">
				<div className="title">
					<h2 className="text">Countdowns</h2>
				</div>
			</div>
			<div className="right">
				<div className="allTimers">
						<div className="timerBox">
							<h2 className="text">Move-In Day</h2>
							<FirstTimer />
						</div>
						<br />
						<div className="timerBox">
							<h2 className="text">Halloween</h2>
							<SecTimer />
						</div>
						<br />
						<div className="timerBox">
							<h2 className="text">Thanksgiving Break</h2>
							<Timer3 />
						</div>
						<br />
						<div className="timerBox">
							<h2 className="text">Winter Break</h2>
							<Timer4 />
						</div>
						<br />
						<div className="timerBox">
							<h2 className="text">Hasan Minhaj Tour!!!</h2>
							<Timer5 />
						</div>
						<br />
						<div className="timerBox">
							<h2 className="text">Spring Break</h2>
							<Timer6 />
						</div>
					</div>
			</div>	





			{/* <Row> */}
				{/* <Col
					style={{
						// width:"40%",
						// border:"1px solid red",
						// float: "left",
					}}
				>
					{/* <h1>For this page I want to include as many Countdown Timers I can. </h1> */}
					

				{/* </Col> */} 
				{/* <Col>
					<div 
							style={{
								
								// textOrientation: "mixed",
								// writingMode: "vertical-lr",
								transform: "rotate(-90deg)",
								// float:"right",
								// fontSize: "50px",
								textDecoration: "underline",
								border: "1px solid blue",
								// marginTop:"200px",
								// marginRight: "0px",
							}}
						>
							<h2>CountDowns</h2>
						</div>
				</Col>
				<Col
					style={{
						// width:"50%",
						border:"1px solid green",
						// display: "Column",
						// justifyContent: "Left",
						// alignItems: "left",
						// float: "right",

					}}
				>
					
					
					
				</Col>
			</Row> */}

		
		</div>
	);
};

export default Timer;