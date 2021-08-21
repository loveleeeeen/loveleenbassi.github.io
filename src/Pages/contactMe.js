import React from 'react';
import emailMe from "../Components/contactForm.js";
import "../PageCss/contactMe.css";
import LinkedIn from "../Assets/linkedIn_transparent.png";
import GitHub from "../Assets/github_transparent.png";

const ContactMe = () => {
	let email = emailMe();
return (
	<div
	style={{
		// display: 'flex',
		// justifyContent: 'center',
		// alignItems: 'center',
		height: '100vh'
	}}
	>
		<div
			style={{
				// display: "flex",
				// justifyContent: "center",
				// alignItems: "center",
			}}
		>

		</div>
		<br /><br />
		<h1>Contact Me!</h1>
		<br /><br />
		<div>
			{email}
		</div>
		<br />
		<div className="iconGroup">
			<a href="https://www.linkedin.com/in/loveleenbassi/"><img className="icon" src={LinkedIn} /></a>
			<a href="https://github.com/loveleeeeen"><img className="icon" src={GitHub} /></a>
		</div>
	</div>
);
};

export default ContactMe;