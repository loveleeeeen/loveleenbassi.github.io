import React from 'react';
import '../PageCss/projects.css';

import NityaLogo from "../Assets/ProjectImg/NityaLogo.png";
import { Link } from 'react-router-dom';

const Projects = () => {
return (
	<div
	style={{
		height: '1000vh',
		// border: '10px solid black',
	}}
	>
		{/* <table 
			style={{
				border: "1px solid pink",
			}}
		>
			<th>Header of this cell</th>
			<tr>one</tr>
			<tr>two</tr>
			<tr>three</tr>
		</table> */}
		<div className="window">
			<h1>My Projects</h1>
			<div className="outer-layer">
				<div className="block">
					<div className="image">
					<img src={NityaLogo} alt="Nitya Ayurveda Logo"  />
					</div>
					<div className="description-box"> 
						<div className="name">
						<a href="https://nityaayurveda.com/" target="_blank" style={{color: "black"}}><h3>Nitya Ayurveda</h3></a>
						</div>
						<div className="description">
							<p>Update Description </p>
						</div>
					

					</div>
				</div>
			</div>
		</div>

		{/* <p>Projects: Hackathon, Neuroscience, IO, Nitya, Captions, School Codes: Queens, Battleship, AI (going to start), SCAI(ML)</p> */}

	</div>
);
};

export default Projects;