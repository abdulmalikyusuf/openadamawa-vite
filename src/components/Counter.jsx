import React, { useEffect, useState } from 'react';

import { currencyFormat } from "../utils/parseProjectData"

const easeOutQuad = t => t * ( 2 - t );
const frameDuration = 1000 / 60;

export default function CountUpAnimation({ children=0, duration = 2000 }) {
	const countTo = parseInt( children, 10 );
	const [ count, setCount ] = useState( 0 );
	
	useEffect( () => {
		let frame = 0;
		const totalFrames = Math.round( duration / frameDuration );
		const counter = setInterval( () => {
			frame++;
			const progress = easeOutQuad( frame / totalFrames );
			setCount( countTo * progress );

			if ( frame === totalFrames ) {
				clearInterval( counter );
			}
		}, frameDuration );
	}, [children, countTo, duration] );

	return currencyFormat(Math.floor(count));
};