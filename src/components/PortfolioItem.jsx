import React from 'react';

export default function PortfolioItem(props) {
	return (
		<div className='page'>
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
			<p className='portfolio-description'>{props.description}</p>
		</div>
	);
}
