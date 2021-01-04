import React from 'react';

export default function Section(props) {
	return (
		<div className='basics'>
			<div className='section-head'>
				<h2>{props.header}</h2>
				<h3>{props.description}</h3>
			</div>
			<div className='container'>{props.children}</div>
		</div>
	);
}
