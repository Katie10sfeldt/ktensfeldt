import React from 'react';

export default function PortfolioItem(props) {
	return (
		<div className='box'>
			<img alt={props.name} src={props.img} className='portfolio-image' />
			<br />
			<a
				className='link'
				href={props.link}
				target='_blank'
				rel='noopener noreferrer'
			>
				{props.title}
			</a>
			{/* <p>
				Web application designed to consolidate all your streaming service watch
				lists, as well as manage all your viewing recommendations.
			</p> */}
		</div>
	);
}
