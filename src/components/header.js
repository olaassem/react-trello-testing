import React from 'react';

import './header.css';


export default function Nav(){
	return(
		<div className="navbar">
			<button className="what">WHAT?</button>
			<button className="new">&#43; NEW GAME</button>
		</div>
	)
}