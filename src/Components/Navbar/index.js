import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from "./NavbarElements";

import Icon from "../../Assets/iconTransparent.png";

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<img src={Icon}
			style={{
				borderRadius:"50%",
				transform: "scale(0.5)"
			}} 
		/>

		<NavMenu>
        	<NavLink to='/' activeStyle>
				Home
			</NavLink>
			<NavLink to='/about' activeStyle>
				About Me
			</NavLink>
			<NavLink to='/projects' activeStyle>
				Projects 
			</NavLink>
			<NavLink to='/MoreMe' activeStyle>
				More Me
			</NavLink>
			<NavLink to='/team' activeStyle>
				Teams
			</NavLink>
			<NavLink to='/blogs' activeStyle>
				Blogs
			</NavLink>
			<NavLink to='/contactMe' activeStyle>
				Contact Me
			</NavLink>
			{/* Second Nav */}
			{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		{/* <NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn> */}
	</Nav>
	</>
);
};

export default Navbar;