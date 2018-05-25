import React from 'react';

import './board.css';
import '../grid.css';

import Nav from './header';
import Screen from './screen';



export default function Board(){
	return(

		<div className="mainboard col-12">
			<div className="navbar col-12">
				<Nav />
			</div>

			<div className="innerboard col-12">
				<h1>HOT or COLD</h1>
				<div className="screen col-12">
					<Screen />
				</div>
			</div>

		</div>

	)
}